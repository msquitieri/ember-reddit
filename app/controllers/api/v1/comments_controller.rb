class Api::V1::CommentsController < ApplicationController
  respond_to :json
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  # GET /comments.json
  def index
    respond_with Comment.all
  end

  # GET /comments/1.json
  def show
    respond_with @comment
  end

  # POST /comments.json
  def create
    respond_with :api, :v1, Comment.create(comment_params)
  end

  # PATCH/PUT /comments/1.json
  def update
    respond_with @comment.update(comment_params)
  end

  # DELETE /comments/1.json
  def destroy
    respond_with @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:text, :link_id)
    end
end

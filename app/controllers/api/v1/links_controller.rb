class Api::V1::LinksController < ApplicationController
  respond_to :json

  before_action :set_link, only: [:show, :edit, :update, :destroy]

  # GET /links.json
  def index
    respond_with Link.all
  end

  # GET /links/1.json
  def show
    respond_with @link
  end

  # POST /links.json
  def create
    respond_with :api, :v1, Link.create(link_params)
  end

  # PATCH/PUT /links/1.json
  def update
    respond_with @link.update(link_params)
  end

  # DELETE /links/1.json
  def destroy
    respond_with @link.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_link
      @link = Link.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def link_params
      params.require(:link).permit(:link, :votes)
    end
end

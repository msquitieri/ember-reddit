namespace :db do
  task populate: :environment do

    Link.destroy_all
    Comment.destroy_all

    10.times do
      Link.create(
        link: Faker::Internet.url,
        votes: Faker::Number.digit
      )
    end

    Link.all.each do |l|
      5.times do
        c = Comment.create(
          text: Faker::Lorem.paragraph,
          link_id: l.id
        )
      end
    end
  end
end
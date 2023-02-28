require 'faker'

10.times do
  user = User.create(
    email: Faker::Internet.email,
    password: Faker::String.random(length: 8)
  )
end

admin = User.create(
  email: "admin@admin.fr",
  password: "admins"
)

30.times do
  article = Article.create(
    title: Faker::Lorem.sentence(word_count: 3),
    content: Faker::Lorem.paragraph(sentence_count: 2),
    user_id: rand(1..10)
  )
end

puts 'Seeds done'
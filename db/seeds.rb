# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

tanyampritchett = User.create!({
    name: "Tanya M. Pritchett",
    email: "tanyampritchett@gmail.com"
})

Comic.destroy_all

blackpanther = Comic.create!({
    title: "Black Panther Klaw Stands Supreme",
    photo_url: "https://i.imgur.com/lJXMFm7.jpg",
    description: "Black Panther",
    user_id: tanyampritchett.id
})

captainamerica = Comic.create!({
    title: "Captain America Home of the Brave",
    photo_url: "https://i.imgur.com/BBK8e3E.png",
    description: "Captain America",
    user_id: tanyampritchett.id
})

ironman = Comic.create!({
   title: "The Invincible Iron Man",
    photo_url: "https://i.imgur.com/EyXRxOw.jpg",
    description: "Iron Man",
    user_id: tanyampritchett.id
})


secretempire = Comic.create!({
   title: "Secret Empire",
    photo_url: "https://i.imgur.com/lFlvmkb.jpg",
    description: "Marvel Super Heroes Unite",
    user_id: tanyampritchett.id
})

xmen = Comic.create!({
    title: "The All New, All Different X-MEN",
    photo_url: "https://i.imgur.com/R4tx5Rj.jpg",
    description: "X-MEN",
    user_id: tanyampritchett.id
})


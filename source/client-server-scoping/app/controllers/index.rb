get '/' do
  erb :index
end

get '/skills/:skill' do
  @params_skillz = params[:skill].capitalize
  erb :skills
end

get '/meals' do
  @meals = ["Spaghetti",
            "Ravioli",
            "Hummus and Veggies",
            "Pizza",
            "Falafel",
            "Sushi",
            "Linguini",
            "Onigilli"]
  @meal = @meals.sample
  erb :meals
end



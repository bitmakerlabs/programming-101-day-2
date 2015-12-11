require 'sinatra'
require 'data_mapper'

# These settings are only for Cloud 9 so we can see our app
set :port, ENV["PORT"]
set :bind, ENV["IP"]

# Required for database setup
DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/todo.db")

class Todo
  include DataMapper::Resource
  property :id, Serial
  property :title, String
  property :completed, Boolean
  property :created_at, DateTime
end

DataMapper.finalize
Todo.auto_upgrade!

get '/' do
  @todos = Todo.all
  @uncompleted_todos = Todo.all(completed: false)
  erb :index
end

get '/new' do
  erb :new
end

post '/create' do
  @todo = Todo.create(title: params[:title], completed: false)
  redirect '/'
end

get '/update/:id' do
  @todo = Todo.get(params[:id])
  if @todo.completed == false
    @todo.completed = true
  else
    @todo.completed = false
  end
  @todo.save
  redirect '/'
end
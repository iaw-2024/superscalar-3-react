task default: [:help]

task :help do
	puts "Tasks: build, run_express"
end

desc "Build the react testing code into a production-ready set of assets, placed into the public folder"
task :build do
	puts "Running build..."
	`npm --prefix clientside run build`
	`mv public public-old`
	`mkdir public`
	`cp -r clientside/build/* public/`
	puts "Done. Run rake run_express to see results"
end

task :run_express do
	puts "Starting the server:"
	system('npm start')
end
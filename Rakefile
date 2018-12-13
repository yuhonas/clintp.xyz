BUILD_DIR = File.expand_path('docs', __dir__).freeze

namespace :ci do
	desc "Build the site for deployment"
	task :build do
		system "jekyll build -d '#{BUILD_DIR}'"	
	end

	desc "One line task description"
	task :lint => [:build] do
	  system "htmlproofer '#{BUILD_DIR}'"
	end
end

class Turn
	
	def initialize(player)
		new_question = Questions.new
		puts
		puts "----New Turn----"
		puts "Player #{player.player_num}: #{new_question.question}"
		puts "Enter Answer:"
		answer = gets.chomp
		result = new_question.correct_answer?(answer.to_i)
    
		if result == true
			puts "Player #{player.player_num}: YES! You are correct!"
		else
			puts "Player #{player.player_num}: Seriously? NO!"
    end
    player.update_lives_num(result)
	end
end
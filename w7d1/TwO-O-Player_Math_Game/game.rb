class Game

	def initialize(round, player1, player2)
		@round = round
		@player1 = player1
		@player2 = player2
  	end

  	def start
  		round_num = 0
  		while round_num <= @round
  			Turn.new(@player1)
  			puts "P #{@player1.player_num}: #{@player1.player_lives}/3 vs P #{@player2.player_num}: #{@player2.player_lives}/3"
  			puts
  			Turn.new(@player2)
  			puts "P #{@player1.player_num}: #{@player1.player_lives}/3 vs P #{@player2.player_num}: #{@player2.player_lives}/3"
  			puts
  			if (@player1.player_lives == 0) || (@player2.player_lives == 0)
  				break
  			end
  			round_num += 1
  		end
  		puts
  		puts "----GAME OVER!----"
      puts "Game result: player#{@player1.player_num}: #{@player1.player_lives}/3, player#{@player2.player_num}: #{@player2.player_lives}/3"
      puts "Good bye!"
  	end
end
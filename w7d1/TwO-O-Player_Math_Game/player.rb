class Player

	attr_accessor :player_num, :player_lives

	def initialize(player_num)
		@player_num = player_num
		@player_lives = 3
    end
    def update_lives_num (result)
        if(result)
            @player_lives = @player_lives
        else
            @player_lives = @player_lives - 1
        end
    end
    
end
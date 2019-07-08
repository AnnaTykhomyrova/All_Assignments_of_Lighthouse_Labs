class Person

    def initialize(name)
      @name = name
    end
    attr_accessor :name

    # do the same as line 6
    # attr_reader :name
    # attr_writer :name

    # manually getter method
    # def name
    #   @name
    # end

    # manually setter method
    # def name=(name)
    #   @name = name
    # end
  end
  
  p = Person.new('L. Ron')
  puts p.name
  p.name=("New Name")
  puts p.name
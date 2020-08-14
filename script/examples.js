window.examples = window.examples || {}

window.examples.intro = `
from cs1robots import *

create_world()
bot = Robot()
bot.set_trace('blue')
bot.set_pause(0.2)

def turn_right():
    for i in range(3):
        bot.turn_left()

for i in range(5):
    bot.move()
    bot.turn_left()
    bot.move()
    turn_right()    
`.trim()
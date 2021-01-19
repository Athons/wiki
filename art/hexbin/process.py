import os
import json
date = "201718"
directory = os.fsencode("hexagons/"+date+"/")
print(directory)
for filename in os.listdir(directory):
    filename=filename.decode("utf-8")
    #print(filename)
    if filename.endswith('.png'):
        data={}
        data['raster'] = os.path.join(directory.decode("utf-8"), filename)
        data['name'] = filename[:-4] 
        print(data['name'])
        data['description'] = "2017 season I demoed sticker"
        with open(filename[:-4]+date+'.json', 'w') as outfile:
            json.dump(data, outfile)
        print()
        

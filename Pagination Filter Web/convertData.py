inputFile = open("Data/data.txt", "r")
imageFiles =[]
destination = []
location = []
area =[]
areaRanking = []
for line in inputFile:
    x = line.split("; ")
    imageFiles.append(x[0])
    destination.append(x[1])
    location.append(x[2])
    area.append(x[3])
    areaRanking.append(x[4].strip())

outputFile = open("Data/outData.txt", "w")
outputFile.write("var destinations = " + str(destination) +"\n")
outputFile.write("var imageFiles = " + str(imageFiles)+"\n")
outputFile.write("var locations = " + str(location)+"\n")
outputFile.write("var areas = " + str(area)+"\n")
outputFile.write("var areaRankings = " + str(areaRanking)+"\n")
outputFile.close()
inputFile.close()

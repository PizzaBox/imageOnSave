# imageOnSave

imageOnSave is a Photoshop script that will save an .jpg (quality 12) of the active document to a folder every time it's saved. You can then assemble these images into a timelapse progress gif or video. 

When you save the script will create a folder in the same directory as the file you're saving. For example: 
```
mypainting.psd will save an image as <folder mypainting.psd is saved in>/mypainting-imageOnSave/mypainting-123456789.png
```

## Installation

* Locate your Photoshop install directory. It's usually located in:
```
C:/Program Files/Adobe/Adobe Photoshop <version>
```
* Navigate to 
```
<Photoshop install location>/Presets/Scripts
```
Check if "Script Events Manager.jsx" exists. If it doesn't, go [here](https://github.com/PizzaBox/imageOnSave/tree/master/Adobe), and install it before proceeding

* Download the [latest version of imageOnSave.jsx (right click - Save Link As)](https://raw.githubusercontent.com/PizzaBox/imageOnSave/master/imageOnSave.jsx) and save it to:
```
<Photoshop install location>/Presets/Scripts/Event Scripts Only
```
**If your photoshop directory is on your c:/ drive, you may have to save the file somewhere else (ie: /Downloads), then copy/paste it into the above directory.**
* The script is now installed! Nice work.

## Adding the script to Photoshop
* Open Photoshop
* Navigate to File->Scripts->Script Events Manager... to open the Events Manager

![Step one](https://github.com/PizzaBox/imageOnSave/blob/master/assets/usage/usage-01.png)
* Next follow the directions below

![Step two](https://github.com/PizzaBox/imageOnSave/blob/master/assets/usage/usage-02.png)
1. Enable the events manager. You can use this to enable and disable the script. Disabling will disable ALL scripts listed below from running.
2. Set "Photoshop event" to "Save Document"
3. Set the script to "imageOnSave-v\[version\]"
4. Click the add button to add the script to the active list
5. **Important** Click Done. Boom, you're done. The script is ready to be used.

## Using the script
To enable imageOnSave, create a empty layer called (capitalization doesn't matter):
```
imageonsave
```
You can enable/disable the script by showing/hiding the layer.

## Creating a timelapse
The best way to create a timelapse is to import the images folder into your favourite video editing software, and exporting a video slideshow.

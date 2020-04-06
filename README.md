# ImageOnSave

imageOnSave is a Photoshop script that will save an image of the active .psd to a folder everytime it's saved. You can then assemble these images into a timelapse progress gif or video. FYI, assembling is not a feature of the script, but instructions for how to do so are below.

## Installation

* Locate your Photoshop install location. It's usually located at:
```
C:/Program Files/Adobe/Adobe Photoshop
```
* Download the [latest version of the script (right click - Save Link As)](https://github.com/PizzaBox/imageOnSave/blob/master/imageOnSave.js) and save it to:
```
<Photoshop install location>/Presets/Scripts/Event Scripts Only
```
**If you photoshop directory is on your c:/, you may have to grant Windows permissions to move the script**
* The script is now installed!.

## Using the script
* Open Photoshop
* Navigate to File/Scripts/Script Events Manager... to open the Events Manager

![Step one](https://github.com/PizzaBox/imageOnSave/blob/master/assets/usage/usage-01.png)
* Next follow the directions below

![Step two](https://github.com/PizzaBox/imageOnSave/blob/master/assets/usage/usage-02.png)
1. Enable the events manager. You can use this to enable and disable the script. Disabling will disable ALL scripts from running. If you have other scripts, you will have to manually remove/add this script when needed.
2. Set "Photoshop event" to "Save Document"
3. Set the script to "imageOnSave-v..."
4. Click the add button to add the script
5. Click Done. Boom, you're done. The script is ready to be used.


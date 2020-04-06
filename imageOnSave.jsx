/*
@@@BUILDINFO@@@ imageOnSave.jsx 1.1.0
*/

var begDesc = "$$$/JavaScripts/imageOnSave/Description=Saves an .jpg of the saved document to a folder in the same directory. This will only trigger when a layer named \"imageonsave\" is present, and is visible." // endDesc
var begName = "$$$/JavaScripts/imageOnSave/MenuName=imageOnSave-v1.1.0" // endName

try {
  var activeDocument = app.activeDocument
  var documentName = activeDocument.name

  if (hasActivationLayer(activeDocument) == true) {
    var fileName = documentName.substr(0, documentName.lastIndexOf('.')) || documentName
    var saveFolder = activeDocument.path + '/' + fileName + '-imageOnSave'

    var createdOutputFolder = createOutputFolder(saveFolder)
    if (createdOutputFolder == false) {
      showAlert('Failed to create output folder. Image was not saved.', true)
    } else {
      var savePath = saveFolder + '/' + fileName + '-' + String(Date.now()) + '.jpg'
      try {
    		activeDocument.saveAs(new File(savePath), new JPEGSaveOptions({ quality: 12 }), true, Extension.LOWERCASE) 
  		} catch (e) {
    		showAlert('Failed to save image', true)
  		}
    }
  } 
} catch (e) {
  showAlert ('Whoops something broke', true)
}

function hasActivationLayer(doc) {
	var layers = doc.layers
	for (var i=0;i<layers.length;i++){	
		var layer = layers[i]
		if (layer.name.toLowerCase() == 'imageonsave' && layer.visible == true) {
			return true
		}
	}
	return false
}

function createOutputFolder(saveFolder) {
  var outputFolder = new Folder(saveFolder)
  if (outputFolder.exists == false) {
    var created = outputFolder.create()
    if (created == false) {
      return false
    }
  }
  return true
}

function showAlert(message, showError){
  if (showError != true) {
    showError = false
  }
  alert(message, 'imageOnSave', showError)
}


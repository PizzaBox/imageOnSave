/*
@@@BUILDINFO@@@ imageOnSave.jsx 1.0.1
*/

var begDesc = "$$$/JavaScripts/imageOnSave/Description=Saves an image of the active document to a folder in the same directory. Will only activate when .psd files are saved. RGB colour mode will save a .png, others will save a .jpg (12 quality)." // endDesc
var begName = "$$$/JavaScripts/imageOnSave/MenuName=imageOnSave-v1.0.1" // endName

try {
  var activeDocument = app.activeDocument
  var documentName = activeDocument.name
  var lastDotIndex = documentName.lastIndexOf('.')
  var fileType =  documentName.substr(lastDotIndex)
  
  if (fileType == '.psd') {
    var fileName = documentName.substr(0, lastDotIndex) || documentName
    var saveOptions = saveOptions(activeDocument.mode)
    var saveFolder = activeDocument.path + '/' + fileName + '-imageOnSave'

    var createdOutputFolder = createOutputFolder(saveFolder)
    if (createdOutputFolder == false){
      showAlert('Failed to create output folder. Image was not saved.', true)
    } else{
      var savePath = saveFolder + '/' + fileName + '-' + String(Date.now()) + saveOptions.ext
      saveImage(activeDocument, savePath, saveOptions.options)
    }
  } 
} catch (e) {
  showAlert ('Whoops something broke', true)
}

function saveImage(activeDocument, savePath, saveOptions){
  try {
    activeDocument.saveAs(new File(savePath), saveOptions, true, Extension.LOWERCASE) 
  } catch (e){
    showAlert('Failed to save image', true)
  }
}

function saveOptions(mode){
  if (mode != 'DocumentMode.RGB'){
    return { ext:'.jpg', options: new JPEGSaveOptions({ quality: 12 }) }
  } else {
    return { ext:'.png', options: new PNGSaveOptions() }
  }  
}

function createOutputFolder(saveFolder){
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
  if (showError != true){
    showError = false
  }
  alert(message, 'imageOnSave', showError)
}


class GenericResult{

  constructor(){
    this.result = true
    this.resultCode = 0
    this.resultObject = {}
    this.resultMessage = ""
  }
  

  error(err, message = ""){
    this.result = false
    this.resultCode = 500
    this.resultMessage = message
    this.resultObject = err
    
    console.error(err)
  }
}

module.exports = GenericResult;

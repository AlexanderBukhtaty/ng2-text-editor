import {Component,OnInit,AfterContentChecked} from 'angular2/core';

@Component({
  selector:'editor',
  templateUrl:'app/components/text-editor/text-editor.html',
  styleUrls:['app/components/text-editor/text-editor.css']
})
export class TextEditor implements AfterContentChecked {
  time:boolean =true;
  editorBody:any;
  editorDoc:any;
  constructor(){
  }
  ngAfterContentChecked(){
    let editor:HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("editor");
    this.editorDoc = editor.contentWindow.document;
    console.log("this.editorDoc",this.editorDoc)
    if(this.time){
      setTimeout(() => {
        this.time = false;
        console.log("editor body--",this.editorDoc.body)
        this.editorBody = editor.contentWindow.document.body;
        this.editorBody.contentEditable = true;
        this.editorDoc.designMode = "on";
      }, '100');
    }

  }

  toggleBold(){
      this.editorDoc.execCommand ('bold', false, null);
  }
  toggleItalic(){
      this.editorDoc.execCommand ('italic', false, null);
 }
 toggleUnderline(){
      this.editorDoc.execCommand ('underline', false, null);
 }
 headingh1(){
   this.editorDoc.execCommand ('formatBlock', false, '<h1>');
 }
 justifyCenter(){
   this.editorDoc.execCommand ('justifyCenter', false, null);
 }
 justifyLeft(){
   this.editorDoc.execCommand ('justifyLeft', false, null);
 }
 justifyRight(){
   this.editorDoc.execCommand ('justifyRight', false, null);
 }
 justifyFull(){
   this.editorDoc.execCommand ('justifyFull', false, null);
 }
 createLink(){
   let text = this.editorDoc.getSelection().toString();
   console.log("textttt--",text)
   let linkURL=prompt("Enter a URL:", "http://");
   console.log("szURL",linkURL)
  //  let linkURL="http://www.google.com";
   this.editorDoc.execCommand ('insertHTML', true, '<a href="' + linkURL + '" target="_blank">' + text +'</a>');
 }
 indent(){
   this.editorDoc.execCommand ('indent', false, null);
 }
}

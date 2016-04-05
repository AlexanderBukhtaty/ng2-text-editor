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

  /**
     *The ngAfterContentChecked is an overrided methodn defined in interface AfterContentChecked.
     *This method is called everytime view gets changed.
     */
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

  /**
     *toggleBold() method toggles bold for the selected text or at the insertion point.
     */
  toggleBold(){
      this.editorDoc.execCommand ('bold', false, null);
  }

  /**
     *toggleItalic() method toggles italics for the selected text or at the insertion point.
     */
  toggleItalic(){
      this.editorDoc.execCommand ('italic', false, null);
 }

 /**
    *toggleUnderline() method toggles underline for the selected text or at the insertion point.
    */
 toggleUnderline(){
      this.editorDoc.execCommand ('underline', false, null);
 }

 /**
    *headingh1() method defines the most important heading.
    */
 headingh1(){
   this.editorDoc.execCommand ('formatBlock', false, '<h1>');
 }

 /**
    *justifyCenter() method centers the selection or insertion point.
    */
 justifyCenter(){
   this.editorDoc.execCommand ('justifyCenter', false, null);
 }

 /**
    *justifyLeft() method justifies the selection or insertion point to the left.
    */
 justifyLeft(){
   this.editorDoc.execCommand ('justifyLeft', false, null);
 }

 /**
    *justifyRight() method right-justifies the selection or the insertion point.
    */
 justifyRight(){
   this.editorDoc.execCommand ('justifyRight', false, null);
 }

 /**
    *justifyFull() method Justifies the selection or insertion point.
    */
 justifyFull(){
   this.editorDoc.execCommand ('justifyFull', false, null);
 }

 /**
    *createLink() method creates an anchor link from the selection, only if there is a selection.
    */
 createLink(){
   let text = this.editorDoc.getSelection().toString();
   console.log("textttt--",text)
   let linkURL=prompt("Enter a URL:", "http://");
   console.log("linkURL",linkURL)
   this.editorDoc.execCommand ('insertHTML', true, '<a href="' + linkURL + '" target="_blank">' + text +'</a>');
 }

 /**
    *indent() method Indents the line containing the selection or insertion point.
    */
 indent(){
   this.editorDoc.execCommand ('indent', false, null);
 }
}

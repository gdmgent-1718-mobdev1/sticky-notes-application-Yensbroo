function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

ready(function(){

    var App = {
        "init": function() {
            this._applicationDbContext = ApplicationDbContext; // Reference to the ApplicationDbContext object
            this.dbData = ApplicationDbContext._dbData;
            this._applicationDbContext.init('ahs.nmd.stickynotes'); // Intialize the ApplicationDbContext with the connection string as parameter value
            //this.testApplicationDbContext(); // Test DbContext
            this.addContentToDom();
            this.updateContentToDom();
            this.deleteContentFromDom();
        },
        "testApplicationDbContext": function() {
          /*  // 1. Get all sticky notes
            let data = this._applicationDbContext.getStickyNotes().message;
            //console.log(data);
            // 2. Create a new sticky note
          //  let sn = new StickyNote();
           // sn.message = 'Pak cola zero voor mezelf.';
           // sn = this._applicationDbContext.addStickyNote(sn); // add to db and save it
            // 3. Get allesticky notes
            data = this._applicationDbContext.getStickyNotes();
            //console.log(data);
            // 4. Get sticky note by id
            sn = this._applicationDbContext.getStickyNoteById(2505908068276);
            //console.log(sn);
            // 5. Delete sticky note by id
            const deleted = this._applicationDbContext.deleteStickyNoteById(2505908068276);
            //console.log(deleted);
            // 6. Soft Delete sticky note with id: 1551637732407
            //const softDeleted = this._applicationDbContext.softDeleteStickyNoteById(1551637732407);
            //console.log(softDeleted);
            //sn = this._applicationDbContext.getStickyNoteById(1551637732407);
            //console.log(sn);
            // 6. Soft Delete sticky note with id: 1551637732407
            const softUnDeleted = this._applicationDbContext.softUnDeleteStickyNoteById(2524073017770);
            //console.log(softUnDeleted);
            sn = this._applicationDbContext.getStickyNoteById(2524073017770);
            //console.log(sn);
            // Update sticky note with id: 1902577181167
            sn = this._applicationDbContext.getStickyNoteById(1847301005559);
            //console.log(sn);
            sn.message = 'ik heb zin in een zwarte kat (koffie)...';
            const updated = this._applicationDbContext.updateStickyNote(1847301005559);
            //console.log(updated);
            sn = this._applicationDbContext.getStickyNoteById(1847301005559);
            //console.log(sn); */
        },
        "addContentToDom": function() {
            let results = this._applicationDbContext.getStickyNotes();
            let strings = JSON.stringify(results); 

            results.forEach(function(strings) {
                
                const newElement = document.createElement("div");
                const container = document.querySelector(".stickyContent");
                const removeBtn = document.createElement("button");
                removeBtn.innerHTML = "<i class='fa fa-trash-o fa-lg'></i>";
                newElement.appendChild(removeBtn);
                newElement.className = "newSticky";
                newElement.innerHTML = strings.message + "<button class='remove'><i class='fa fa-trash-o fa-lg'></i></button>";
                container.appendChild(newElement);
                
            }, this);



        },
        "updateContentToDom": function(){
            const submitBtn = document.querySelector(".submit");
            const newMessage = document.querySelector(".addMessage");
            const content = document.querySelector('.stickyContent');

            submitBtn.addEventListener('click', function(){

               let sn = new StickyNote();
                sn.message = newMessage.value;
                //sn = this._applicationDbContext.addStickyNote();
                if(sn.message == ""){
                    alert("Vul iets in aub");
                } else {
                    const divSticky = document.querySelector(".newSticky");
                    const container = document.querySelector(".stickyContent");
                    divSticky.innerHTML = sn.message;
                    container.appendChild(divSticky);
                }       

            });   
        },
        "deleteContentFromDom": function(){
            var remove = document.querySelector(".remove");
            remove.addEventListener('click', function(){

                const divSticky = document.querySelector(".stickyContent");

            });
        } 

    };

    App.init(); // Initialize the application
});
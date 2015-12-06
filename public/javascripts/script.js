$(function(){

    // Event handler for submission of application form.
    $('#application').on('submit', function(e){

        //prevent default action
        e.preventDefault();

        //get form data
        var data = $(this).serializeArray();

        //variable to store application information as an object to pass to server
        var newApp = {};
        //time stamp for the event
        newApp.appTime = e.timeStamp;

        //for loop to add information to the newApplication object
        for(var i = 0; i<data.length; i++){
            if(data[i].name === 'fName') {
                newApp.fName = data[i].value;
            }else if(data[i].name === 'lName'){
                newApp.lName = data[i].value;
            }else if(data[i].name === 'desJob'){
                if(data[i].value !== '') {
                    newApp.desJob = data[i].value;
                }
            }else if(data[i].name === 'desLocus'){
                if(data[i].value === 'remote') {
                    newApp.desLocus = data[i].value;
                }else if(data[i].value === 'specLocus'){
                    newApp.desLocus = data[4].value + ', ' + data[5].value
                }
            }else if(data[i].name === 'title1'){//building job1 objects in application object
                if(data[i].value !== '') {
                    newApp.job1 = {};
                    newApp.job1.title = data[i].value;
                }
            }else if(data[i].name === 'employer1'){
                if(data[i].value !== '') {
                    newApp.job1.employer = data[i].value;
                }
            }else if(data[i].name === 'cityE1'){
                if(data[i].value !== '') {
                    newApp.job1.city = data[i].value;
                }
            }else if(data[i].name === 'stateE1'){
                if(data[i].value !== '') {
                    newApp.job1.state = data[i].value;
                }
            }else if(data[i].name === 'dutiesE1'){
                if(data[i].value !== '') {
                    var stringE1 = data[i].value;
                    newApp.job1.duties = stringE1.split(';');
                }
            }else if(data[i].name === 'title2'){//building job2 objects in application object
                if(data[i].value !== '') {
                    newApp.job2 = {};
                    newApp.job2.title = data[i].value;
                }
            }else if(data[i].name === 'employer2'){
                if(data[i].value !== '') {
                    newApp.job2.employer = data[i].value;
                }
            }else if(data[i].name === 'cityE2'){
                if(data[i].value !== '') {
                    newApp.job2.city = data[i].value;
                }
            }else if(data[i].name === 'stateE2'){
                if(data[i].value !== '') {
                    newApp.job2.state = data[i].value;
                }
            }else if(data[i].name === 'dutiesE2'){
                if(data[i].value !== '') {
                    var stringE2 = data[i].value;
                    newApp.job2.duties = stringE2.split(';');
                }
            }else if(data[i].name === 'title3'){//building job3 objects in application object
                if(data[i].value !== '') {
                    newApp.job3 = {};
                    newApp.job3.title = data[i].value;
                }
            }else if(data[i].name === 'employer3'){
                if(data[i].value !== '') {
                    newApp.job3.employer = data[i].value;
                }
            }else if(data[i].name === 'cityE3'){
                if(data[i].value !== '') {
                    newApp.job3.city = data[i].value;
                }
            }else if(data[i].name === 'stateE3'){
                if(data[i].value !== '') {
                    newApp.job3.state = data[i].value;
                }
            }else if(data[i].name === 'dutiesE3'){
                if(data[i].value !== '') {
                    var stringE3 = data[i].value;
                    newApp.job3.duties = stringE3.split(';');
                }
            }else if(data[i].name === 'skills'){
                if(data[i].value !== '') {
                    var stringSkills = data[i].value;
                    newApp.skills = stringSkills.split(';');
                }
            }
        }

        //ajax call to post application to database
        $.ajax({
            url: '/applicants',
            type: 'post',
            data: JSON.stringify({newApp: newApp}),
            contentType: 'application/json; charset=utf-8'
        }).done(function(){
            alert('Application has been submitted');
        });

        //reset the application form
        $(this)[0].reset();
    })

    //event handler to search for applications
    $('#search').on('submit', function(e) {

        //prevents default action
        e.preventDefault();

        //get search parameters from search form
        var searchParams = $(this).serializeArray();

        //variable to store application information as an object to pass to server
        var newSearch = {};

        //for loop to add parameters to the newSearch object
        for(var h = 0; h<data.length; h++) {
            if (data[i].name === 'sFName') {
                newSearch.sFName = data[i].value;
            } else if (data[i].name === 'SLName') {
                newSearch.sLName = data[i].value;
            } else if (data[i].name === 'sLocus') {
                newSearch.sLocus = data[i].value;
            } else if (data[i].name === 'sSkills') {
                newSearch.sSkills = data[i].value;
            }
        }
        $.ajax({
            url: '/applicants/search',
            type: 'get',
            data: JSON.stringify({newSearch: newSearch}),
            contentType: 'application/json; charset=utf-8'
        }).done(function(data){

        });

        //reset the application form
        $(this)[0].reset();
    })

});
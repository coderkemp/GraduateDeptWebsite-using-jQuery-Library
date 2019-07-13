$.noConflict();                // fix for jQuery UI plugin issue faced
var wmcopt = {                    // Widget creation using jQuery UI Plugin
        autoOpen: false,
        modal: true,
        width: 550,
        height:250,
        title: 'Web and Mobile Computing'
};
var hccopt = {                    
        autoOpen: false,
        modal: true,
        width: 550,
        height:250,
        title: 'Human Centered Computing'
};
var citopt = {                    
        autoOpen: false,
        modal: true,
        width: 550,
        height:250,
        title: 'Computing and Information Technologies'
};
var istopt = {                    
        autoOpen: false,
        modal: true,
        width: 550,
        height:250,
        title: 'Information Sciences and Technologies'
};
var hciopt = {                    
        autoOpen: false,
        modal: true,
        width: 550,
        height:250,
        title: 'Human Computer Interaction'
};
var nsaopt = {                    
        autoOpen: false,
        modal: true,
        width: 550,
        height:250,
        title: 'Networking and Systems Administration'
};
var facultyopt = {                    
        autoOpen: false,
        modal: true,
        width: 550,
        height:250,
        title: 'Faculty'
}; 

$(document).ready(function(){
AboutURI();
wmcDefault();
hccDefault();
citDefault();
istDefault();
hciDefault();
nsaDefault();
employmentDefault();
footerDefault();

 $("#wmcButton").click(function(){
    Service.getwmcDegreesData().done(function(wmcData){
          var wmcHtml="";
          var title = wmcData.title;
          var concentrations= wmcData.concentrations;
          var trackStore="";
          var length = concentrations.length;
          for(var i=0;i<length;i++){
              trackStore+= wmcData.concentrations[i]+"\n";
              console.log(trackStore);
          }
          wmcHtml = "<div>"+"<h4>"+title+"</h4>"+"CONCENTRATIONS"+"<br/>"+trackStore+"<br/>"+"To learn about this degree, visit our website"+"<br/>"+"<a href=http://wmc.rit.edu>"+"http://wmc.rit.edu"+"</a>";
          $("#divInDialog").html(wmcHtml);
      }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in wmcButton****");
           }); 
            var theDialog = $("#divDialog").dialog(wmcopt); 
            theDialog.dialog("open");
});

$("#hccButton").click(function(){
      Service.gethccDegreesData().done(function(hccData){
          var hccHtml="";
          var title = hccData.title;
          var concentrations= hccData.concentrations;
          var trackStore="";
          var length = concentrations.length;
          for(var i=0;i<length;i++){
              trackStore+= hccData.concentrations[i]+"\n";
              console.log(trackStore);
          }
       hccHtml = "<div>"+"<h4>"+title+"</h4>"+"CONCENTRATIONS"+"<br/>"+trackStore+"<br/>"+"To learn about this degree, visit our website"+"<br/>"+"<a href=http://hcc.rit.edu>"+"http://hcc.rit.edu"+"</a>";
          $("#divInDialog").html(hccHtml);
      }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in hccButton****");
           });
         var theDialog = $("#divDialog").dialog(hccopt); 
            theDialog.dialog("open");
});
$("#citButton").click(function(){
      Service.getcitDegreesData().done(function(citData){
          var citHtml="";
          var title = citData.title;
          var concentrations= citData.concentrations;
          var trackStore="";
          var length = concentrations.length;
          for(var i=0;i<length;i++){
              trackStore+= citData.concentrations[i]+"\n";
              console.log(trackStore);
          }
         citHtml = "<div>"+"<h4>"+title+"</h4>"+"CONCENTRATIONS"+"<br/>"+trackStore+"<br/>"+"To learn about this degree, visit our website"+"<br/>"+"<a href=http://cit.rit.edu>"+"http://cit.rit.edu"+"</a>";
          $("#divInDialog").html(citHtml);
      }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in citButton****");
           });
         var theDialog = $("#divDialog").dialog(citopt); 
         theDialog.dialog("open");
}); 
$("#istButton").click(function(){
      Service.getistDegreesData().done(function(istData){
          var istHtml="";
          var title = istData.title;
          var concentrations= istData.concentrations;
          var trackStore="";
          var length = concentrations.length;
          for(var i=0;i<length;i++){
              trackStore+= istData.concentrations[i]+"\n";
              console.log(trackStore);
          }
           istHtml = "<div>"+"<h4>"+title+"</h4>"+"CONCENTRATIONS"+"<br/>"+trackStore+"<br/>"+"To learn about this degree, visit our website"+"<br/>"+"<a href=http://it.rit.edu>"+"http://it.rit.edu"+"</a>";
          $("#divInDialog").html(istHtml);
      }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in citButton****");
           });
         var theDialog = $("#divDialog").dialog(istopt); 
         theDialog.dialog("open");
}); 
$("#hciButton").click(function(){
      Service.gethciDegreesData().done(function(hciData){
          var hciHtml="";
          var title = hciData.title;
          var concentrations= hciData.concentrations;
          var trackStore="";
          var length = concentrations.length;
          for(var i=0;i<length;i++){
              trackStore+= hciData.concentrations[i]+"\n";
              console.log(trackStore);
          }
         hciHtml = "<div>"+"<h4>"+title+"</h4>"+"CONCENTRATIONS"+"<br/>"+trackStore+"<br/>"+"To learn about this degree, visit our website"+"<br/>"+"<a href=http://hci.rit.edu>"+"http://hci.rit.edu"+"</a>";
          $("#divInDialog").html(hciHtml);
      }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in citButton****");
           });
         var theDialog = $("#divDialog").dialog(hciopt); 
         theDialog.dialog("open");
}); 
$("#nsaButton").click(function(){
      Service.getnsaDegreesData().done(function(nsaData){
          var nsaHtml="";
          var title = nsaData.title;
          var concentrations= nsaData.concentrations;
          var trackStore="";
          var length = concentrations.length;
          for(var i=0;i<length;i++){
              trackStore+= nsaData.concentrations[i]+"\n";
              console.log(trackStore);
          }
            nsaHtml = "<div>"+"<h4>"+title+"</h4>"+"CONCENTRATIONS"+"<br/>"+trackStore+"<br/>"+"To learn about this degree, visit our website"+"<br/>"+"<a href=http://hci.rit.edu>"+"http://hci.rit.edu"+"</a>";
          $("#divInDialog").html(nsaHtml);
      }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in citButton****");
           });
        var theDialog = $("#divDialog").dialog(nsaopt); 
         theDialog.dialog("open");
}); 
    
$("#map").html('<object data="https://www.ist.rit.edu/api/map/"/>'); 
    
$("#coopTable").DataTable({ 
                "ajax":"coop.json",
                "columns": [
                    { "data": "employer" },
                    { "data": "degree" },
                    { "data": "city" },
                    { "data": "term" }
                ]
});
    
$("#proEmpTable").DataTable({ 
                "ajax":"proEmp.json",
                "columns": [
                    { "data": "employer" },
                    { "data": "degree" },
                    { "data": "city" },
                    { "data": "title" },
                    { "data": "startDate" }
                ]
});
    

$("#daniel").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[19].facultyName;
        var citations=facultyData.byFaculty[19].citations;
        var length=facultyData.byFaculty[19].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#boggard").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[6].facultyName;
        var citations=facultyData.byFaculty[6].citations;
        var length=facultyData.byFaculty[6].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#charlie").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[18].facultyName;
        var citations=facultyData.byFaculty[18].citations;
        var length=facultyData.byFaculty[18].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#michael").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[12].facultyName;
        var citations=facultyData.byFaculty[12].citations;
        var length=facultyData.byFaculty[12].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#golen").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[17].facultyName;
        var citations=facultyData.byFaculty[17].citations;
        var length=facultyData.byFaculty[17].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#viki").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[13].facultyName;
        var citations=facultyData.byFaculty[13].citations;
        var length=facultyData.byFaculty[13].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#bruce").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[8].facultyName;
        var citations=facultyData.byFaculty[8].citations;
        var length=facultyData.byFaculty[8].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#larry").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[15].facultyName;
        var citations=facultyData.byFaculty[15].citations;
        var length=facultyData.byFaculty[15].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#holden").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[11].facultyName;
        var citations=facultyData.byFaculty[11].citations;
        var length=facultyData.byFaculty[11].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#matt").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[18].facultyName;
        var citations=facultyData.byFaculty[18].citations;
        var length=facultyData.byFaculty[18].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#kang").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[20].facultyName;
        var citations=facultyData.byFaculty[20].citations;
        var length=facultyData.byFaculty[20].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#deborah").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[15].facultyName;
        var citations=facultyData.byFaculty[15].citations;
        var length=facultyData.byFaculty[15].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#jim").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[18].facultyName;
        var citations=facultyData.byFaculty[18].citations;
        var length=facultyData.byFaculty[18].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#sharon").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[8].facultyName;
        var citations=facultyData.byFaculty[8].citations;
        var length=facultyData.byFaculty[8].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#tae").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[9].facultyName;
        var citations=facultyData.byFaculty[9].citations;
        var length=facultyData.byFaculty[9].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});
$("#nirmala").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[10].facultyName;
        var citations=facultyData.byFaculty[10].citations;
        var length=facultyData.byFaculty[10].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});  
$("#brian").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[1].facultyName;
        var citations=facultyData.byFaculty[1].citations;
        var length=facultyData.byFaculty[1].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
}); 
$("#ronald").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[17].facultyName;
        var citations=facultyData.byFaculty[17].citations;
        var length=facultyData.byFaculty[17].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
}); 
$("#elissa").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[2].facultyName;
        var citations=facultyData.byFaculty[2].citations;
        var length=facultyData.byFaculty[2].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
}); 
$("#qi").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[3].facultyName;
        var citations=facultyData.byFaculty[3].citations;
        var length=facultyData.byFaculty[3].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
}); 
$("#steve").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[4].facultyName;
        var citations=facultyData.byFaculty[4].citations;
        var length=facultyData.byFaculty[4].citations.length;
        var storeCitations="";
        for(var i=0; i<length ; i++){
            storeCitations+=citations[i]+"/n";
        }
        facultyHtml="<div>"+facultyname+"<br/>"+storeCitations+"</div>";
        $("#divInDialog").html(facultyHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in facultyLink****");
           });
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
}); 
    
$("#scott").click(function(){
        var newProfHtml="";
        var name="Scott Root";
        console.log(name);
        var profile1= "Application Manager at Wegmans Associates";
        console.log(profile1);
        var profile2="Adjunct Professor at R.I.T for Web Development Courses.";
        newProfHtml = "<div>"+ name+"<br/>"+profile1+"<br/>"+profile2+"<br/>"+"</div>";
        $("#divInDialog").html(newProfHtml);
         var theDialog = $("#divDialog").dialog(facultyopt); 
         theDialog.dialog("open");
});    
    
   
    
    
});

function AboutURI(){
    Service.getAboutURIData().done(function(aboutURIData){  //Service.getAboutURIData().done(fn1(){}).fail(fn2(){});
        var uriHTML="";
        var title = aboutURIData.title;
        var description = aboutURIData.description;
        var quote =aboutURIData.quote;
        var quoteAuthor = aboutURIData.quoteAuthor;
        console.log(quoteAuthor);
        uriHTML="<div>"+ "<h2>"+title+"</h2>" +"<br/>"+"<h5>"+ description +"</h5>"+"<br/>"+"<h5>"+"'"+quote+"'"+" - "+quoteAuthor+"</h5>"+"</div>";
        $("#AboutURIContainer").html(uriHTML);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in aboutURI****");
           });
    }

function wmcDefault(){
    Service.getwmcDegreesData().done(function(wmcData){
        var wmcHtml="";
        var title = wmcData.title;
        var description = wmcData.description;
        var description1=description.substring(0,72);
        var description2=description.substring(72,description.length);
      
        wmcHtml ="<div>"+"<h4>"+title+"</h4>"+"<h5>"+description1+"</h5>"+"<h5>"+description2+"</h5>"+"</div>";
        $("#wmcHead").html(wmcHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in wmcDefault****");
           });
}

function hccDefault(){
    Service.gethccDegreesData().done(function(hccData){
        var hccHtml="";
        var title = hccData.title;
        var description = hccData.description;
        var description1=description.substring(0,69);
        var description2=description.substring(69,description.length);
      
        hccHtml ="<div>"+"<h4>"+title+"</h4>"+"<h5>"+description1+"</h5>"+"<h5>"+description2+"</h5>"+"</div>";
        $("#hccHead").html(hccHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in hccDefault****");
           });
}

function citDefault(){
    Service.getcitDegreesData().done(function(citData){
        var citHtml="";
        var title = citData.title;
        var description = citData.description;
        var description1=description.substring(0,45);
        var description2=description.substring(46, description.length);
        citHtml ="<div>"+"<h4>"+title+"</h4>"+"<h5>"+description1+"</h5>"+"<h5>"+description2+"</h5>"+"</div>";
        $("#citHead").html(citHtml);
    }).fail(function(jqXHR, textStatus, err){
           alert("***something wrong in citDefault****");
           });
}

function istDefault(){
    Service.getistDegreesData().done(function(istData){
        var istHtml = "";
        var title = istData.title;
        var description = istData.description;
        var description1=description.substring(0,64);
        var description2=description.substring(65,description.length);
        istHtml ="<div>"+"<h4>"+title+"</h4>"+"<h5>"+description1+"</h5>"+"<h5>"+description2+"</h5>"+"</div>";
        $("#istHead").html(istHtml);
    }).fail(function(jqXHR, textStatus, err){
        alert("****something wrong in istDefault****");
    });
}

function hciDefault(){
    Service.gethciDegreesData().done(function(hciData){
        var hciHtml = "";
        var title = hciData.title;
        var description = hciData.description;
        var description1=description.substring(0,64);
        var description2=description.substring(65,130);
        hciHtml ="<div>"+"<h4>"+title+"</h4>"+"<h5>"+description1+"</h5>"+"<h5>"+description2+"</h5>"+"</div>";
        $("#hciHead").html(hciHtml);
    }).fail(function(jqXHR, textStatus, err){
        alert("****something wrong in istDefault****");
    });
}

function nsaDefault(){
    Service.getnsaDegreesData().done(function(nsaData){
        var nsaHtml = "";
        var title = nsaData.title;
        var description = nsaData.description;
        var description1=description.substring(0,description.length);
        var description2=description.substring(46,description.length);
        nsaHtml ="<div>"+"<h4>"+title+"</h4>"+"<h5>"+description1+"</h5>"+"<h5>"+description2+"</h5>"+"</div>";
        $("#nsaHead").html(nsaHtml);
    }).fail(function(jqXHR, textStatus, err){
        alert("****something wrong in istDefault****");
    });
}

function employmentDefault(){
    Service.getEmploymentData().done(function(empData){
        var empHtml1="";
        var empHtml2="";
        var empHtml3="";
        var empHtml4="";
        var empHtml5="";
        var empHtml6="";
        var empHtml7="";
        var empHtml8="";
        var title = empData.introduction.title;
        var employment=empData.introduction.content[0].title;
        var description=empData.introduction.content[0].description;
        empHtml1="<div>"+"<h2>"+title+"</h2>"+"<br/>"+"<h2>"+employment+"</h2>"+"<br/>"+description+"</div>";
        $("#introduction").html(empHtml1);
        var value1= empData.degreeStatistics.statistics[0].value;
        console.log(value1);
        var description1= empData.degreeStatistics.statistics[0].description;
        empHtml2="<div>"+"<center>"+"<h3>"+value1+"</h3>"+"<center>"+"<br/>"+description1+"</div>";
        $("#value1").html(empHtml2);
        var value2= empData.degreeStatistics.statistics[1].value;
        var description2= empData.degreeStatistics.statistics[1].description;
        empHtml3="<div>"+"<center>"+"<h3>"+value2+"</h3>"+"</center>"+"<br/>"+description2+"</div>";
        $("#value2").html(empHtml3);
        var value3= empData.degreeStatistics.statistics[2].value;
        var description3= empData.degreeStatistics.statistics[2].description;
        empHtml4="<div>"+"<center>"+"<h3>"+value3+"</h3>"+"</center>"+"<br/>"+description3+"</div>";
        $("#value3").html(empHtml4);
        var value4= empData.degreeStatistics.statistics[3].value;
        var description4= empData.degreeStatistics.statistics[3].description;
        empHtml5="<div>"+"<center>"+"<h3>"+value4+"</h3>"+"</center>"+"<br/>"+description4+"</div>";
        $("#value4").html(empHtml5);
        var employment=empData.introduction.content[1].title;
        var description=empData.introduction.content[1].description;
        empHtml6="<div>"+"<h2>"+employment+"</h2>"+"<br/>"+description+"</div>";
        $("#coop").html(empHtml6);
        var employers=empData.employers.title;
        var empLeng=empData.employers.employerNames.length;
        var employerNames="";
        for(var i=0; i<empLeng;i++){
            employerNames+=empData.employers.employerNames[i]+" , "+"\t";
            console.log(employerNames);
        }
        empHtml7="<div>"+"<h2>"+employers+"</h2>"+"<br/>"+employerNames+"</div>";
        $("#employers").html(empHtml7);
        var careers=empData.careers.title;
        var careerLeng=empData.careers.careerNames.length;
        var careerNames="";
         for(var i=0; i<careerLeng;i++){
            careerNames+=empData.careers.careerNames[i]+" , "+"\t";
            console.log(careerNames);
        }
        empHtml8="<div>"+"<h2>"+careers+"</h2>"+"<br/>"+careerNames+"</div>";
        $("#careers").html(empHtml8);
    }).fail(function(jqXHR, textStatus, err){
        alert("****something wrong in employment part*****");
    })
}

function footerDefault(){
    Service.getFooterData().done(function(fooData){
        var footerHtml="";
        var title = fooData.social.title;
        var tweet = fooData.social.tweet;
        var by = fooData.social.tweet;
        footerHtml = "<div>"+"<h3>"+"<center>"+title+"</center>"+"</h3>"+"<br/>"+"<h4>"+"<center>"+tweet+"</center>"+"</h4>"+"<br/>"+"<center>"+"<a href=https://twitter.com/istatrit>"+"twitterRITLink"+"</a>"+"</center>"+"<br/>"+"<center>"+"<a href=https://www.facebook.com/ISTatRIT>"+"facebookRITLink"+"</a>"+"</center>"+ "</div>";
        $("#footer").html(footerHtml);  
    }).fail(function(jqXHR, textStatus, err){
        alert("****something wrong in employment part*****");
    })
}





    

$.noConflict();                // fix for jQuery UI plugin issue faced
var facultyopt = {                    
        autoOpen: false,
        modal: true,
        width: 550,
        height:250,
        title: 'Faculty'
};
$(document).ready(function(){   
$("#daniel").click(function(){
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
$("#boggard").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[7].facultyName;
        var citations=facultyData.byFaculty[7].citations;
        var length=facultyData.byFaculty[7].citations.length;
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
$("#michael").click(function(){
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
$("#golen").click(function(){
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
$("#viki").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[14].facultyName;
        var citations=facultyData.byFaculty[14].citations;
        var length=facultyData.byFaculty[14].citations.length;
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
        var facultyname=facultyData.byFaculty[21].facultyName;
        var citations=facultyData.byFaculty[21].citations;
        var length=facultyData.byFaculty[21].citations.length;
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
        var facultyname=facultyData.byFaculty[16].facultyName;
        var citations=facultyData.byFaculty[16].citations;
        var length=facultyData.byFaculty[16].citations.length;
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
$("#sharon").click(function(){
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
$("#tae").click(function(){
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
$("#nirmala").click(function(){
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
$("#steve").click(function(){
    Service.getAboutFaculty().done(function(facultyData){
        var facultyHtml="";
        var facultyname=facultyData.byFaculty[5].facultyName;
        var citations=facultyData.byFaculty[5].citations;
        var length=facultyData.byFaculty[5].citations.length;
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
    
    
    
});
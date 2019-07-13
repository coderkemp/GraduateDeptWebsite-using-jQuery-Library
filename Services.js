var Service = function() {
    
    function getAboutURIData(){
        var AboutURI = "https://people.rit.edu/~sarics/web_proxy.php?path=about/";
        return $.getJSON(AboutURI);
     
    }
    
    function getwmcDegreesData(){
        var wmcDegrees="https://people.rit.edu/~sarics/web_proxy.php?path=degrees/undergraduate/degreeName=wmc";
        return $.getJSON(wmcDegrees);
    }
    
    function gethccDegreesData(){
        var hccDegrees="https://people.rit.edu/~sarics/web_proxy.php?path=degrees/undergraduate/degreeName=hcc";
        return $.getJSON(hccDegrees);
    }
    
    function getcitDegreesData(){
        var citDegrees="https://people.rit.edu/~sarics/web_proxy.php?path=degrees/undergraduate/degreeName=cit";
        return $.getJSON(citDegrees);
    }
    
    function getistDegreesData(){
        var istDegrees="https://people.rit.edu/~sarics/web_proxy.php?path=degrees/graduate/degreeName=ist";
        return $.getJSON(istDegrees);
    }
    
     function gethciDegreesData(){
        var hciDegrees="https://people.rit.edu/~sarics/web_proxy.php?path=degrees/graduate/degreeName=hci";
        return $.getJSON(hciDegrees);
    }
    
     function getnsaDegreesData(){
        var nsaDegrees="https://people.rit.edu/~sarics/web_proxy.php?path=degrees/graduate/degreeName=nsa";
        return $.getJSON(nsaDegrees);
    }
    
    function getEmploymentData(){
        var employment="https://people.rit.edu/~sarics/web_proxy.php?path=employment";
        return $.getJSON(employment);
    }
    function getMap(){
        var map="http://www.ist.rit.edu/api/map/";
        return $.get(map);
    }
    function getAboutFaculty(){
        var aboutFaculty="https://people.rit.edu/~sarics/web_proxy.php?path=research/byFaculty/";
        return $.getJSON(aboutFaculty);
    }
    function getFooterData(){
        var footer="https://people.rit.edu/~sarics/web_proxy.php?path=footer/";
        return $.getJSON(footer);
    }
 
    return{
        getAboutURIData: getAboutURIData,
        getwmcDegreesData: getwmcDegreesData,
        gethccDegreesData: gethccDegreesData,
        getcitDegreesData: getcitDegreesData,
        getistDegreesData: getistDegreesData,
        gethciDegreesData: gethciDegreesData,
        getnsaDegreesData: getnsaDegreesData,
        getEmploymentData: getEmploymentData,
        getMap: getMap,
        getAboutFaculty: getAboutFaculty,
        getFooterData: getFooterData
    }
}();

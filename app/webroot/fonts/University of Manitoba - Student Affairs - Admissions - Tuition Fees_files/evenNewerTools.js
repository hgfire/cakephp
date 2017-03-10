/**
 * browser detection script
 *
 * This script is taken from http://www.quirksmode.org/js/detect.html
 * This script will need to be updated regularly in order for it to remain
 * effective. To update the script you need to either add or alter the object
 * literals found in the dataBrowser array literal.
 * 
 * author: ?
 * Date Implemented here April 17, 2010
 *
 **/
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();
/**
 * getTableHeights
 *
 * This function looks for any tables inside the given element
 * and, if found, tries to determine their heights.
 *
 * param: divID
 * returns: tableSize
 * author: Dave Cooke
 * date: April 17, 2010
 **/
function getTableHeights(divID)
{
	var tempSize = $(divID).height();
    return tempSize;
}//end getTableHeights
function fixUnderflow()
{
   var midStuffHeight = 0;
   var leftNavHeight = 0;
   var rightColHeight = 0;
   var introHeight = 0;
   var highest = 0;
   var topTasksHt = 0;
   //var test = getTaskGroupHeight();
   //alert("determining section heights....");
   if((typeof(objIntro) != "undefined") && objIntro.ref)
   {

       introHeight = objIntro.getHeight();
       //alert("mid height is: "+midStuffHeight);
   }//end if
   if((typeof(objMidStuff) != "undefined") && objMidStuff.ref)
   {
       if((typeof(objTopTasks) != "undefined") && objTopTasks.ref)
       {
        topTasksHt = objTopTasks.getHeight();
       }//end inner if block
       //some tables heights will get picked up by getHeight() and others
       //do not, I have NO IDEA WHY!!! So this function will get the height
       //, its accuracy is debatable, of any tables contained in the specified
       //div.
       //var tableHeights = getTableHeights('centerInfo');
       //alert("table height: "+tableHeights);
       midStuffHeight = objMidStuff.getHeight();
       //now add on the height of the center header area
       midStuffHeight = midStuffHeight + introHeight + topTasksHt;
       //ATTEMPTED FIX
       //so if tableHeights > midStuffHeight then I know that the table inside
       //the mid area did not get picked up by getHeight() so I add it in.
       //WARNING
       //this will not solve the case where the table is indeed smaller than
       //the rest of the content in the midStuff (centerInfo) area. In that
       //case, assuming that the table in question doesn't get detected by
       //getHeight(), the proper total page height will still come up short!
       //if(tableHeights > 0 && tableHeights > midStuffHeight)
       //{
         //alert("mid height: "+ midStuffHeight+", table height: "+tableHeights);
          //midStuffHeight = midStuffHeight + tableHeights;
       //}//end if
       
       //alert("browser: "+BrowserDetect.browser+", ver: "+BrowserDetect.version);
       //for some reason Prototype.js, more specifically the getHeight()
       //function, can't determine the height of any tables contained
       //inside an element. So I wrote a simple function to look for tables
       //in a given element and, if found, determine their heights.
       //if(BrowserDetect.browser == "Explorer" && BrowserDetect.version == "7")
       //{
            //add table height to the total height to account for bug in getHeight()
            //running on webpages displayed in IE7 or IE 8 compatibility mode.
            //if(tableHeights > 0)
            //{
                //alert('table heights: '+tableHeights);
                //midStuffHeight = tableHeights;
            //}//end if
       //}//end if
       //else
       //{
          //don't do anything, getHeight() can properly determine an objects
          //height on modern browsers just not in IE 7 or IE 8 Compatibility
          //mode.
          //midStuffHeight = midStuffHeight + tableHeights;
       //}//end else.
       //alert("mid height is: "+midStuffHeight);
   }//end if
   if((typeof(objLeftNav) != "undefined") && objLeftNav.ref != "")
   {
        
       leftNavHeight = objLeftNav.getHeight();
       //alert("left height is: "+leftNavHeight);
   }//end if
   if((typeof(objRightBar) != "undefined") && objRightBar.ref)
   {
        
       rightColHeight = objRightBar.getHeight();
       //alert("right height is: "+rightColHeight);
   }
   if(midStuffHeight == 0 && leftNavHeight == 0 && rightColHeight == 0)
   {
        //do nothing.
        //alert("all columns are zero");
   }
   else
   {
       //alert("line 58");
       //since all three variables contain valid data then we set out to
       //set the correct height of each section of the page.
       if(midStuffHeight > leftNavHeight)
       {
           if(midStuffHeight > rightColHeight)
           {
               //alert("mid is highest(64): "+highest);
               highest = midStuffHeight;
           }//end if
           else
           {
               //alert("right is highest(69): "+highest);
               highest = rightColHeight;
           }//end else
       }//end if
       else
       {
           if(leftNavHeight > rightColHeight)
           {
               //alert("left is highest(77): "+highest);
               highest = leftNavHeight;
           }//end if
           else
           {
               //alert("right is highest(82): "+highest);
               highest = rightColHeight;
           }//end else
       }//else
       //now set all the heights to the correct height (of the three columns)
       objContent.ref.style.height = highest + "px";
       if((typeof(objLeftNav) != "undefined") && objLeftNav.ref != null)
       {
            objLeftNav.ref.style.height = highest + "px";
            //add a thin bar to the left hand side of the middle column to provide
            //a separator between the left nav and the middle column.
            document.getElementById("centerContent").style.borderLeft = "thin solid #d9d9d8";
       }//end if
	   if ((typeof(objRightBar) != "undefined") && objRightBar.ref) {
	   	objRightBar.ref.style.height = highest + "px";
		//if there is no content in the rightBar don't put the border on the
		//right hand side of the center column.
		if(document.getElementById("rightBar").innerHTML == "")
       	{
          document.getElementById("centerContent").style.borderRight = "";
       	}//end if
		else
		{
		  document.getElementById("centerContent").style.borderRight = "thin solid #d9d9d8";
		}//end else.
	   }//end if
	   //no rightBar defined. So don't put a border along the right hand side
	   //of the center column.
	   else
	   {
	   		document.getElementById("centerContent").style.borderRight = "";
	   }
       //in order to prevent these columns from bleeding through the footer
       //we also adjust the center content area (which contains all the
       //above columns)
       objCenter.ref.style.height = highest + "px";
              
       
   }//end else

}//end fixUnderflow
function moveMenu() {
	if (getActiveStyleSheet() != "ssPrint") {
		var adjBy = (is_ie4up) ? 0:2;
		adjBy = (is_fx) ? 1:adjBy;
		document.getElementById("reposMe").style.top = (document.getElementById("nav").offsetTop + adjBy) + "px";
		document.getElementById("reposMe").style.left = "2px";
		/*if ((is_safari) || (is_fx)) {
			document.getElementById("nav").style.height = "23px";
		} else {
			document.getElementById("nav").style.height = "26px";
		}*/
		document.getElementById("reposMe").style.top = xPageY("nav") + 2;
		document.getElementById("reposMe").style.left = "1px";
		/*if ((is_nav6up) && (!is_nav7up)) {
			document.getElementById("reposMe").style.visibility = "hidden";
			document.getElementById("reposMe").style.display = "none";
		} else {*/
			document.getElementById("reposMe").style.visibility = "visible";
			document.getElementById("reposMe").style.display = "";
		//}
	}
}//end moveMenu
/*************************************************
 * setPageObjects
 *
 * Simply sets various javascript objects for use
 * in later functions. This function is called on
 * page load.
 *
 * params: none
 * returns: void
 * 
 */
function setPageObjects() {
	objContent = new pageObject("centerContent");
    objCenter = new pageObject("center");
    objAddress = new pageObject("address");
  	objFooter = new pageObject("footer");
	objTopTasks = new pageObject("topTasks");
	objMidStuff = new pageObject("centerInfo");
	objIntro = new pageObject("centerHeader");
	objRightBar = new pageObject("rightBar");
	objLeftNav = new pageObject("leftNav");
}//end setPageObjects
function getObjectHeight(obj)
{
    return $(obj).height();
}
function pageObject(strId) {
	this.ref = (document.getElementById(strId)) ? document.getElementById(strId):null;
	this.getHeight = function() {
		try {
			return this.ref.offsetHeight;
		} catch(e) {
			return 0;
		}
  }
}
function trim(s)
{

  return s.replace(/^\s+|\s+$/, '');

}
function validateEmail(fld) {
    
    var error="";
    var tfld = trim(fld.value);  // value of field with whitespace trimmed off    
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
    if (fld.value == "")
    {

        //fld.style.background = 'Red';
        error = "Error -- you didn't enter an email address.\n";

    }//end if
    else if (!emailFilter.test(tfld))
    {

        //fld.style.background = 'Red';
        error = "Error -- please enter a valid email address.\n";

    }//end else if
    else if (fld.value.match(illegalChars))
    {

        //fld.style.background = 'Red';
        error = "Error -- the email address contains illegal characters.\n";

    }//end else if
    else
    {
        fld.style.background = 'White';
    }//end else
    return error;

}//end validateEmail
function sendWebForm()
{
	var url = "http://umanitoba.ca/include/form_handler_v3.php";
	var formData = $('#webForm').serialize();
	alert(formData);
    jQuery.post(url,formData,function(data)
            {
    			alert(data);
            });	
}
function rotateImageJQ(flag,mainDivID,subDivClass)
{
   //on faculty landing pages
   // #advert .layer4
   // #events .layer4
   // #taskGroup .content   <---- if we can add a unique id to each hub box.
   
   // Use jQuery via $j(...)
   $(document).ready(function(){
       var flagd = flag;
       var imageListJQ = "#"+mainDivID+" > ."+subDivClass;
       var mDiv = "#"+mainDivID;

       if(flagd == 1)
       {
            //$j('#web_button > .imageList').hide();
            var list = $(imageListJQ).children();
            var listLength = list.length;
            var randomnumber=Math.floor(Math.random()*listLength);
            //alert(randomnumber);
            $(mDiv).html(list[randomnumber]);
            //$j(mainDivID).append(list[randomnumber]);
            //$j(mainDivID).show();
            //$j('.taskGroup > .content1').html(list[randomnumber]);
       }//end if
       else
       {
           $(imageListJQ).show();
           $(imageListJQ).innerfade({
               speed:'slow',
               timeout:4000,
               type:'sequence'
           });
       }//end else
    });
    // Use Prototype with $(...), etc.
    //$('someid').hide();
}//end rotateImageJQ
/**
 * slideshow
 * 
 * This function connects to a php page which will pass back 
 * a list of images or image links. It then begins to cycle
 * through them. 
 * 
 * textPath is the path to the text file on the server that
 * contains the html code for the images or image links.
 * 
 * thumbDiv is the container that the thumbnail navigation links
 * will go so users can manually control the slideshow.
 * 
 * url is the url to the php page that will grab the images or
 * image links.
 * 
 * containerDiv is the div that the images will be put in.
 * 
 * auth: Dave Cooke
 * date: June 4th, 2010
 * 
 */
function slideshow(textPath,thumbDiv,url,containerDiv, randomize) 
{
    //settings for the jQuery.cycle plugin (slideshow)
	//Added randomize option. Lee Martin 12/09/13
	if (!randomize){
		randomize=false;	
	}
    var settings = {fx:'fade',speed:600,timeout:5000,type:'sequence',pause: 1,pager:thumbDiv,random:randomize};
    //script that builds the html
    //ajax calls that grabs the images or image links.
    jQuery.get(url, { path: textPath},function(data)
            {
    			//stick the retrieved data in the containerDiv
                jQuery(containerDiv).html(data);
                //cycle through the images.
                jQuery(containerDiv).cycle(settings);
            });
}//end slideshow
function fetchFeed(feed, divId, title_cutoff, story_cutoff) {

	var url = 'http://umanitoba.ca/include/homepagenew-news-v2.php'; 
    jQuery.get(url, {feed:feed,divId:divId,cutoff_title:title_cutoff,cutoff_story:story_cutoff},function(data)
            {
    			//stick the retrieved data in the appropriate div block
                jQuery(divId).html(data);
                
            });
}//end fetchFeed
/**
 * fixHubPadding
 *
 * Adjusts the task boxes on a hub page that are closest to the leftNav column
 * and makes there margins zero so that the boxes are flush with the left hand
 * side of the page.
 *
 * auth: Dave Cooke
 * date: Jan 26th, 2010
 *
 * 2012Mar08 Waiyee Lai - the wide topTask 4 hubs padding left not working, can't find #lognHubBox...
 *                        nor #rightBar
 */
function fixHubPadding()
{
    //gets the list of boxes associated with the class taskGroup
    var taskBoxArray = $('.taskGroup');
	var foundLongHubBox = taskBoxArray.find('#longHubBox');
	
	if(foundLongHubBox.style != null)
	{
		//then set its left margin to zero and everything else 
		//has a normal margin.
		foundLongHubBox.style.marginLeft = "0px";
		//alert('found a long hub box.');
		if(!$('#rightBar'))
		{
			//alert("setting rowSize to 4");
			//set the topTasks width to the correct size.
			$('#topTasks').style.width = "850px";
			rowSize = 4;
		}//end if
	}//end if
	else
	{
		//2012Mar09 WYL - find the rightBar div the other way...
		var divCollection = document.getElementsByTagName("div");
        var rightBar = 0;
		for (var i=0; i<divCollection.length; i++) {
            if(divCollection[i].getAttribute("id") == "rightBar") {
                rightBar = 1;
            } 
        }
        //alert(rightBar);		
		if (rightBar) {
		//var rowSize = 3;//number of TaskBoxes in each row. 	
		//if(!$('#rightBar'))		{
			//alert("setting rowSize to 4");
			//set the topTasks width to the correct size.
			//$('#topTasks').style.width = "850px"; // 2012Mar09 Waiyee - set the div width correctly in the content class template
			rowSize = 3;
		}//end if
		else { 
			rowSize=4; 
		}
		//alert("rowSize:"+rowSize);

		//determines the size of the array.
		var size = taskBoxArray.length;
		var pos = 0; //first elem in the array.    
		while(pos <= size && size != 0)
		{
			//get the task box at position pos
			var tempBlock = taskBoxArray[pos];
			if(tempBlock != null)
			{
				//adjust its margin
				tempBlock.style.marginLeft = "0px";
				//alert("setting margin to zero for block: "+pos);
			}//end if.
			//increment the pos variable by the max length of a row which is
			//statically defined, its a constant.
			pos = pos + rowSize;
			//alert("pos:"+pos);			
		}//end while loop
	}//end outer else
    //also adjust the centerInfo padding to zero to ensure that the boxes are
    //indeed flush with the left side of the page.
    //$('centerInfo').style.paddingLeft = "0px";
    
}//fixHubPadding
/************************************************
 * leftNav
 * 
 * Highlights the menu item of the active
 * page using the jQuery javascript library.
 * 
 *  Author: Dave Cooke
 *  date: May 21, 2010
 *  params: none
 *  returns: void
 *************************************************
 */
function leftNav()
{
 
	$(function(){
		   var path = location.pathname.substring(1);
		   //only do the dom traversal is we have a valid path
		   //attr('class','selected');
		   if ( path )
		    $('#leftNav a[href$="' + path + '"]').attr('class', 'selected');
			//marksup parent link
		    $('#leftNav a[href$="' + path + '"]').parentsUntil('#leftNav').filter('li').contents().filter(function(){return this.nodeType == 3;}).wrap('<b></b>');
			//marksup current link.
		   	$('#leftNav a[href$="' + path + '"]').parentsUntil('#leftNav').filter('li').children().filter(':not(ul)').css({'color' : '#005D61', 'font-weight' : 'bolder'});
		 });
}//end leftNav

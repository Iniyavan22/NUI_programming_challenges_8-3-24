

function checkType(science,maths,english,social){
    if(science && maths && english && social){
        let scienceIsNumber =false;
        let mathsIsNumber =false;
        let englishIsNumber =false;
        let socialIsNumber =false;
        if (typeof(science)==='number' && science>-1){
            scienceIsNumber=true;
        }
        else{
            console.log("science mark is not a numeric value");
        }
        if(typeof(maths)==='number' && maths>-1){
            mathsIsNumber=true;
        }
        else{
            console.log("maths mark is not a numeric value");
        }
        if(typeof(english)==='number' && english>-1){
            englishIsNumber=true;
        }
        else{
            console.log("english mark is not a numeric value");
        }
        if (typeof(social)==='number' && social>-1){
            socialIsNumber=true;
        }
        else{
            console.log("social mark is not a numeric value");
        }
        if (scienceIsNumber && mathsIsNumber && englishIsNumber && socialIsNumber){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}


function findBestAndLeastAverage(studentData){

    if(studentData){
        let bestAverage =0;
        let leastAverage =Infinity;
        let bestAverageStudent ="";
        let leastAverageStudent="";
        
        for(let student of studentData){
            
            if(checkType(student.science,student.maths,student.english,student.social)){
                let average = (student.science + student.social+ student.maths+ student.english)/4
                if (bestAverage <= average){
                    bestAverage = average;
                    bestAverageStudent = student.first_name+" "+student.last_name;
                }
                if (leastAverage > average){
                    leastAverage = average;
                    leastAverageStudent = student.first_name+" "+student.last_name;
                }
            }
        }
        return [bestAverageStudent,leastAverageStudent];
    }
    else{
        console.log("argument not passed");
    };

};



function paginate(studentData,currentPage,itemsPerPage){

   
    if(studentData && currentPage && itemsPerPage){
        if(studentData.length>1){
            let studentsPaginatedData=[];
            for (let i = currentPage; i < itemsPerPage+1; i++) {
                if(typeof(currentPage)==='number' && currentPage>0){
                   if (typeof(itemsPerPage)==='number'&& itemsPerPage<studentData.length+1){
                        if (currentPage * itemsPerPage < studentData.length){
                            studentsPaginatedData.push(studentData[i]);
                        }
                        else{
                            console.log("pagination cannot be loaded")
                        }
                   }
                   else{
                        console.log("perPage is not valid")
                   }
                }
                else{
                    console.log("current page is not valid")
                }
                
            }
            return studentsPaginatedData;
        }
        else{
            console.log("no data is present");
        }
    }
    else{
        console.log("argument is not passed");
    }

};



function findBestStateAverage(studentData){

    if(studentData){
        let stateAverageDictionary={};
        for(let student of studentData){
            if(checkType(student.science,student.maths,student.english,student.social)){
                let average = (student.science + student.social+ student.maths+ student.english)/4
                if(!stateAverageDictionary[student.state]){
                    stateAverageDictionary[student.state]=[average];
                }
                else{
                    stateAverageDictionary[student.state].push(average);
                }
            }
        }

        
        let bestAverageInState=0;
        let bestStateAverage="";
        for(let state in stateAverageDictionary){
            let highestAverageInState =stateAverageDictionary[state].reduce((accumulator,element)=>
            { return accumulator+element},0)/stateAverageDictionary[state].length;
            if (bestAverageInState < highestAverageInState){
                bestAverageInState = highestAverageInState;
                bestStateAverage=state;
            }
        }

        return bestStateAverage;
  
 
    }
    else{
        console.log("argument not passed");
    };
}


const studentData =[
    {"id":1,"first_name":"Darby","last_name":"Headrick","email":"dheadrick0@discovery.com","state":"AZ","science":42,"maths":12,"english":12,"social":65},
    {"id":2,"first_name":"Chariot","last_name":"Jermy","email":"cjermy1@cpanel.net","state":"AL","science":31,"maths":84,"english":8,"social":95},
    {"id":3,"first_name":"Dasya","last_name":"Le Marchand","email":"dlemarchand2@adobe.com","state":"KY","science":2,"maths":29,"english":45,"social":69},
    {"id":4,"first_name":"Alanson","last_name":"O'Doghesty","email":"aodoghesty3@tiny.cc","state":"FL","science":29,"maths":61,"english":61,"social":56},
    {"id":5,"first_name":"Alric","last_name":"Tumbridge","email":"atumbridge4@dyndns.org","state":"AZ","science":61,"maths":39,"english":96,"social":10},
    {"id":6,"first_name":"Felecia","last_name":"Bandy","email":"fbandy5@nbcnews.com","state":"CT","science":98,"maths":34,"english":84,"social":92},
    {"id":7,"first_name":"Basile","last_name":"Spoole","email":"bspoole6@nyu.edu","state":"TX","science":14,"maths":5,"english":83,"social":27},
    {"id":8,"first_name":"Glendon","last_name":"Napier","email":"gnapier7@icq.com","state":"MI","science":36,"maths":24,"english":22,"social":40},
    {"id":9,"first_name":"Loise","last_name":"Anglin","email":"langlin8@wordpress.com","state":"TX","science":89,"maths":54,"english":60,"social":30},
    {"id":10,"first_name":"Juieta","last_name":"Tittershill","email":"jtittershill9@theglobeandmail.com","state":"AL","science":48,"maths":42,"english":76,"social":74},
    {"id":11,"first_name":"Alexia","last_name":"Roomes","email":"aroomesa@sogou.com","state":"MN","science":33,"maths":77,"english":92,"social":68},
    {"id":12,"first_name":"Sheelah","last_name":"Misken","email":"smiskenb@mac.com","state":"NC","science":57,"maths":67,"english":55,"social":87},
    {"id":13,"first_name":"Ruddie","last_name":"Henriques","email":"rhenriquesc@baidu.com","state":"TX","science":94,"maths":8,"english":26,"social":29},
    {"id":14,"first_name":"Blakeley","last_name":"Allcoat","email":"ballcoatd@gravatar.com","state":"CO","science":58,"maths":89,"english":12,"social":86},
    {"id":15,"first_name":"Selestina","last_name":"Wallis","email":"swallise@accuweather.com","state":"MA","science":29,"maths":83,"english":72,"social":83},
    {"id":16,"first_name":"Dunstan","last_name":"Venneur","email":"dvenneurf@smh.com.au","state":"DC","science":12,"maths":19,"english":6,"social":3},
    {"id":17,"first_name":"Tyne","last_name":"Polack","email":"tpolackg@imgur.com","state":"MN","science":13,"maths":9,"english":74,"social":9},
    {"id":18,"first_name":"Sibby","last_name":"Kerswell","email":"skerswellh@imdb.com","state":"MS","science":18,"maths":92,"english":75,"social":91},
    {"id":19,"first_name":"Maxy","last_name":"Caroll","email":"mcarolli@cisco.com","state":"MD","science":60,"maths":62,"english":40,"social":93},
    {"id":20,"first_name":"Adeline","last_name":"Quarmby","email":"aquarmbyj@mtv.com","state":"CO","science":81,"maths":99,"english":69,"social":79},
    {"id":21,"first_name":"Wilma","last_name":"Ellerington","email":"welleringtonk@google.com","state":"LA","science":83,"maths":91,"english":23,"social":57},
    {"id":22,"first_name":"Tod","last_name":"Southey","email":"tsoutheyl@indiegogo.com","state":"TX","science":36,"maths":98,"english":72,"social":52},
    {"id":23,"first_name":"Nikolia","last_name":"Limer","email":"nlimerm@unblog.fr","state":"NE","science":16,"maths":38,"english":73,"social":42},
    {"id":24,"first_name":"Husein","last_name":"Lawranson","email":"hlawransonn@wikimedia.org","state":"TX","science":84,"maths":87,"english":9,"social":89},
    {"id":25,"first_name":"Iain","last_name":"Bearsmore","email":"ibearsmoreo@webnode.com","state":"TX","science":46,"maths":92,"english":6,"social":82},
    {"id":26,"first_name":"Brit","last_name":"Spittal","email":"bspittalp@addthis.com","state":"CA","science":48,"maths":97,"english":29,"social":62},
    {"id":27,"first_name":"Cal","last_name":"Dadge","email":"cdadgeq@senate.gov","state":"WA","science":4,"maths":71,"english":13,"social":99},
    {"id":28,"first_name":"Kimberlee","last_name":"McArthur","email":"kmcarthurr@infoseek.co.jp","state":"OK","science":97,"maths":99,"english":20,"social":39},
    {"id":29,"first_name":"Billye","last_name":"Karys","email":"bkaryss@china.com.cn","state":"AR","science":73,"maths":19,"english":74,"social":14},
    {"id":30,"first_name":"Nara","last_name":"Laurent","email":"nlaurentt@java.com","state":"GA","science":90,"maths":17,"english":81,"social":4},
    {"id":31,"first_name":"Coletta","last_name":"Stelli","email":"cstelliu@joomla.org","state":"WA","science":96,"maths":52,"english":85,"social":48},
    {"id":32,"first_name":"Sebastian","last_name":"Hayhow","email":"shayhowv@plala.or.jp","state":"SC","science":8,"maths":70,"english":44,"social":63},
    {"id":33,"first_name":"Ephrayim","last_name":"Crowter","email":"ecrowterw@wikispaces.com","state":"CA","science":37,"maths":17,"english":64,"social":88},
    {"id":34,"first_name":"Conn","last_name":"Laborde","email":"clabordex@reference.com","state":"IL","science":19,"maths":93,"english":69,"social":80},
    {"id":35,"first_name":"Alene","last_name":"Braisby","email":"abraisbyy@imgur.com","state":"TN","science":73,"maths":18,"english":43,"social":63},
    {"id":36,"first_name":"Sarita","last_name":"Tower","email":"stowerz@360.cn","state":"OH","science":52,"maths":100,"english":53,"social":57},
    {"id":37,"first_name":"Deanna","last_name":"Leupold","email":"dleupold10@mail.ru","state":"FL","science":86,"maths":20,"english":12,"social":74},
    {"id":38,"first_name":"Merle","last_name":"Dougal","email":"mdougal11@ow.ly","state":"VA","science":29,"maths":62,"english":17,"social":9},
    {"id":39,"first_name":"Bobette","last_name":"Tolhurst","email":"btolhurst12@bandcamp.com","state":"FL","science":25,"maths":54,"english":12,"social":99},
    {"id":40,"first_name":"Berkly","last_name":"Slyne","email":"bslyne13@ucoz.com","state":"CA","science":17,"maths":23,"english":91,"social":55},
    {"id":41,"first_name":"Halimeda","last_name":"Dundridge","email":"hdundridge14@flavors.me","state":"MO","science":40,"maths":58,"english":73,"social":33},
    {"id":42,"first_name":"Effie","last_name":"Colwill","email":"ecolwill15@cnet.com","state":"MN","science":76,"maths":75,"english":58,"social":36},
    {"id":43,"first_name":"Feliza","last_name":"Dotterill","email":"fdotterill16@shutterfly.com","state":"NY","science":97,"maths":21,"english":76,"social":48},
    {"id":44,"first_name":"Britt","last_name":"Momford","email":"bmomford17@ftc.gov","state":"WA","science":35,"maths":46,"english":87,"social":60},
    {"id":45,"first_name":"Adele","last_name":"Mcmanaman","email":"amcmanaman18@webnode.com","state":"KS","science":71,"maths":15,"english":86,"social":4},
    {"id":46,"first_name":"Bobby","last_name":"Thaw","email":"bthaw19@constantcontact.com","state":"AR","science":86,"maths":21,"english":70,"social":3},
    {"id":47,"first_name":"Cobby","last_name":"Durrant","email":"cdurrant1a@guardian.co.uk","state":"MI","science":74,"maths":5,"english":90,"social":10},
    {"id":48,"first_name":"Yasmeen","last_name":"Hughlin","email":"yhughlin1b@telegraph.co.uk","state":"NY","science":11,"maths":65,"english":92,"social":88},
    {"id":49,"first_name":"Windham","last_name":"Stansbie","email":"wstansbie1c@jugem.jp","state":"AL","science":20,"maths":99,"english":2,"social":48},
    {"id":50,"first_name":"Maximilianus","last_name":"Caroline","email":"mcaroline1d@discovery.com","state":"FL","science":88,"maths":7,"english":2,"social":71},
    {"id":51,"first_name":"Halsy","last_name":"Heeps","email":"hheeps1e@engadget.com","state":"TX","science":84,"maths":71,"english":93,"social":20},
    {"id":52,"first_name":"Amalea","last_name":"Worsnap","email":"aworsnap1f@ihg.com","state":"MN","science":73,"maths":42,"english":2,"social":95},
    {"id":53,"first_name":"Kass","last_name":"Soars","email":"ksoars1g@cnbc.com","state":"TX","science":38,"maths":46,"english":60,"social":80},
    {"id":54,"first_name":"Gusella","last_name":"Simenon","email":"gsimenon1h@digg.com","state":"AZ","science":64,"maths":28,"english":74,"social":39},
    {"id":55,"first_name":"Gwenore","last_name":"Mockler","email":"gmockler1i@meetup.com","state":"CA","science":37,"maths":79,"english":9,"social":77},
    {"id":56,"first_name":"Blinny","last_name":"Twelftree","email":"btwelftree1j@hao123.com","state":"CA","science":29,"maths":91,"english":14,"social":12},
    {"id":57,"first_name":"Cosme","last_name":"Scotts","email":"cscotts1k@flavors.me","state":"VA","science":16,"maths":3,"english":15,"social":65},
    {"id":58,"first_name":"Gabriel","last_name":"Showt","email":"gshowt1l@jugem.jp","state":"FL","science":29,"maths":57,"english":71,"social":56},
    {"id":59,"first_name":"Sara","last_name":"Ingley","email":"singley1m@infoseek.co.jp","state":"IL","science":57,"maths":37,"english":100,"social":89},
    {"id":60,"first_name":"Oralia","last_name":"Bain","email":"obain1n@amazon.co.uk","state":"TX","science":3,"maths":23,"english":43,"social":16},
    {"id":61,"first_name":"Abner","last_name":"Rawsthorn","email":"arawsthorn1o@answers.com","state":"CA","science":73,"maths":83,"english":87,"social":100},
    {"id":62,"first_name":"Alia","last_name":"Barltrop","email":"abarltrop1p@pinterest.com","state":"TX","science":70,"maths":69,"english":64,"social":50},
    {"id":63,"first_name":"Astra","last_name":"Bome","email":"abome1q@nydailynews.com","state":"FL","science":11,"maths":72,"english":27,"social":70},
    {"id":64,"first_name":"Nickolas","last_name":"Brandassi","email":"nbrandassi1r@unesco.org","state":"TX","science":15,"maths":1,"english":26,"social":44},
    {"id":65,"first_name":"Selene","last_name":"Klaaasen","email":"sklaaasen1s@earthlink.net","state":"PA","science":87,"maths":55,"english":86,"social":43},
    {"id":66,"first_name":"Helenelizabeth","last_name":"Gallelli","email":"hgallelli1t@youku.com","state":"MO","science":60,"maths":56,"english":86,"social":15},
    {"id":67,"first_name":"Carlotta","last_name":"Paulot","email":"cpaulot1u@comsenz.com","state":"MA","science":36,"maths":32,"english":30,"social":51},
    {"id":68,"first_name":"Berk","last_name":"Ferruzzi","email":"bferruzzi1v@theguardian.com","state":"NC","science":51,"maths":7,"english":67,"social":53},
    {"id":69,"first_name":"Nichols","last_name":"Bolliver","email":"nbolliver1w@liveinternet.ru","state":"TX","science":86,"maths":98,"english":10,"social":5},
    {"id":70,"first_name":"Rosette","last_name":"Kraft","email":"rkraft1x@tumblr.com","state":"CA","science":50,"maths":64,"english":42,"social":29},
    {"id":71,"first_name":"Cassius","last_name":"Demonge","email":"cdemonge1y@is.gd","state":"IA","science":49,"maths":41,"english":18,"social":33},
    {"id":72,"first_name":"Toni","last_name":"Forgie","email":"tforgie1z@shop-pro.jp","state":"TX","science":99,"maths":64,"english":68,"social":10},
    {"id":73,"first_name":"Lloyd","last_name":"MacGahey","email":"lmacgahey20@imageshack.us","state":"MN","science":21,"maths":6,"english":98,"social":10},
    {"id":74,"first_name":"Helenelizabeth","last_name":"Kee","email":"hkee21@google.pl","state":"NY","science":39,"maths":41,"english":21,"social":60},
    {"id":75,"first_name":"Bambi","last_name":"Thurber","email":"bthurber22@eventbrite.com","state":"MD","science":33,"maths":82,"english":5,"social":71},
    {"id":76,"first_name":"Penrod","last_name":"Fairney","email":"pfairney23@huffingtonpost.com","state":"KS","science":79,"maths":50,"english":28,"social":57},
    {"id":77,"first_name":"Goldy","last_name":"McCarron","email":"gmccarron24@hao123.com","state":"OH","science":68,"maths":45,"english":73,"social":54},
    {"id":78,"first_name":"Johnna","last_name":"Krzysztofiak","email":"jkrzysztofiak25@photobucket.com","state":"SC","science":97,"maths":100,"english":81,"social":73},
    {"id":79,"first_name":"Karel","last_name":"Rubinowitch","email":"krubinowitch26@amazon.de","state":"OH","science":1,"maths":1,"english":86,"social":21},
    {"id":80,"first_name":"Cece","last_name":"Buckam","email":"cbuckam27@goo.gl","state":"NC","science":30,"maths":38,"english":7,"social":9},
    {"id":81,"first_name":"Elvyn","last_name":"Matyushonok","email":"ematyushonok28@hud.gov","state":"TX","science":35,"maths":23,"english":88,"social":30},
    {"id":82,"first_name":"Ulysses","last_name":"Roote","email":"uroote29@chronoengine.com","state":"PA","science":39,"maths":63,"english":41,"social":59},
    {"id":83,"first_name":"Janeczka","last_name":"Glasscoe","email":"jglasscoe2a@theguardian.com","state":"AZ","science":53,"maths":9,"english":26,"social":50},
    {"id":84,"first_name":"Lucienne","last_name":"Gerin","email":"lgerin2b@guardian.co.uk","state":"KY","science":79,"maths":12,"english":86,"social":69},
    {"id":85,"first_name":"Elmo","last_name":"Wadhams","email":"ewadhams2c@hatena.ne.jp","state":"MA","science":3,"maths":96,"english":65,"social":76},
    {"id":86,"first_name":"Eunice","last_name":"Shawell","email":"eshawell2d@cbslocal.com","state":"FL","science":96,"maths":44,"english":97,"social":15},
    {"id":87,"first_name":"Eldin","last_name":"Jessen","email":"ejessen2e@home.pl","state":"CA","science":89,"maths":22,"english":49,"social":33},
    {"id":88,"first_name":"Eugenio","last_name":"Karim","email":"ekarim2f@blogtalkradio.com","state":"TX","science":65,"maths":98,"english":45,"social":68},
    {"id":89,"first_name":"Abbe","last_name":"Mantram","email":"amantram2g@ow.ly","state":"CA","science":85,"maths":32,"english":39,"social":13},
    {"id":90,"first_name":"Pierce","last_name":"Tchir","email":"ptchir2h@reference.com","state":"NC","science":8,"maths":99,"english":35,"social":76},
    {"id":91,"first_name":"Anthony","last_name":"Nevett","email":"anevett2i@dot.gov","state":"TX","science":3,"maths":14,"english":90,"social":62},
    {"id":92,"first_name":"Loydie","last_name":"Beevens","email":"lbeevens2j@chicagotribune.com","state":"TX","science":16,"maths":24,"english":61,"social":29},
    {"id":93,"first_name":"Laraine","last_name":"Pipkin","email":"lpipkin2k@bizjournals.com","state":"TX","science":12,"maths":96,"english":19,"social":36},
    {"id":94,"first_name":"Holly-anne","last_name":"Crammy","email":"hcrammy2l@prweb.com","state":"KY","science":40,"maths":91,"english":83,"social":16},
    {"id":95,"first_name":"Betta","last_name":"Beardsall","email":"bbeardsall2m@xrea.com","state":"LA","science":19,"maths":28,"english":85,"social":73},
    {"id":96,"first_name":"Bobbie","last_name":"Lutty","email":"blutty2n@twitpic.com","state":"WI","science":3,"maths":90,"english":67,"social":9},
    {"id":97,"first_name":"Ingeborg","last_name":"Tompkiss","email":"itompkiss2o@skype.com","state":"TX","science":46,"maths":76,"english":44,"social":29},
    {"id":98,"first_name":"Jamaal","last_name":"Methingam","email":"jmethingam2p@gmpg.org","state":"GA","science":58,"maths":41,"english":63,"social":19},
    {"id":99,"first_name":"Mirna","last_name":"Petters","email":"mpetters2q@51.la","state":"NY","science":81,"maths":91,"english":94,"social":35},
    {"id":100,"first_name":"Anni","last_name":"Heitz","email":"aheitz2r@seesaa.net","state":"TX","science":1,"maths":6,"english":80,"social":7}
];



console.log(findBestAndLeastAverage(studentData));
console.log(findBestStateAverage(studentData))
console.log(paginate(studentData,1,10));



// if (i >= (currentPage - 1) * itemsPerPage && i < currentPage * itemsPerPage) {
//     studentsPaginatedData.push(studentData[i]);
// }
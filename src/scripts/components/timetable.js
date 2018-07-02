export default function Timetable() {
    const day = (new Date()).getDay();
    const el = document.getElementsByClassName('timetable');

    for(var x=0; x<el.length; x++) {
        let timetable = el[x];
        let trs = timetable.getElementsByTagName('tr');
        for (var y = 0; y < trs.length; y++) { 
            let tr = trs[y];
            if(tr.dataset.day == day) {
                tr.className = "timetable__row-today";
            }
        }
    }
}
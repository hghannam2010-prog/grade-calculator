/* فتح الصفحات */
function openPage(p){
    document.querySelectorAll(".page").forEach(x => x.style.display="none");
    document.getElementById(p).style.display="block";

    if(p === "page1012"){
        document.querySelectorAll(".sub").forEach(x => x.style.display="none");
    }
}

/* رجوع للصفحة الرئيسية */
function goHome(){
    openPage("home");
}

/* دارك مود */
function toggleDark(){
    document.body.classList.toggle("dark");
}

/* التقدير */
function grade(x){
    if(x >= 95) return "ممتاز جدًا ⭐️";
    if(x >= 85) return "ممتاز ⭐️";
    if(x >= 75) return "جيد جدًا 👍";
    if(x >= 65) return "جيد 🙂";
    return "يحتاج إلى تحسين 💔";
}

/* حساب 5–9 */
function calc59(){
    let sum = 0, count = 0;
    for(let i=1;i<=9;i++){
        let v = document.getElementById("m"+i).value;
        if(v !== ""){
            sum += parseFloat(v);
            count++;
        }
    }
    let avg = (sum/count).toFixed(2);
    document.getElementById("sum59").innerText = "المجموع: " + sum;
    document.getElementById("avg59").innerText = "المعدل: " + avg + "%";
    document.getElementById("grade59").innerText = grade(avg);
}

/* فتح عاشر / علمي / أدبي */
function open1012(type){
    document.querySelectorAll(".sub").forEach(x => x.style.display="none");
    document.getElementById(type).style.display="block";
}

/* حساب عاشر – علمي – أدبي */
function calcSub(a,b,n,sumId,avgId,gradeId){
    let sum = 0, count = 0;
    for(let i=1;i<=n;i++){
        let got = document.getElementById(a+i).value;
        let full = document.getElementById(b+i).value;
        if(got !== "" && full !== ""){
            sum += (got/full)*100;
            count++;
        }
    }
    let avg = (sum/count).toFixed(2);
    document.getElementById(sumId).innerText = "مجموع النسب: " + sum.toFixed(2);
    document.getElementById(avgId).innerText = "المعدل: " + avg + "%";
    document.getElementById(gradeId).innerText = grade(avg);
}
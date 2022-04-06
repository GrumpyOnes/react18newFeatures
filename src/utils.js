const getFetchData = ()=>{
    return fetch('http://idev.comp.mws.fat2975.qa.nt.ctripcorp.com/api/team/datadomain/list')
    .then((data)=>{ return data.json()})
}
const getPromiseFakeData = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve((Math.random()*100000).toFixed())
        },1000)
    })
}
const wrapPromise=(promise)=>{
    let status='pending';
    let result;
    let suspender = promise.then(r=>{
        status="success";
        result=r;
    },e=>{
        status ='error';
        result = e;
    });
    return {
        read() {
            switch(status){
                case 'pending':
                    throw suspender;
                    break;
                case 'error':
                   throw result;
                   break;
                default:
                    return result;

            }
        }
    }
}
const fetchData=()=>{
    return {
        ftch:wrapPromise(getFetchData()),
        prms:wrapPromise(getPromiseFakeData())
    }
}
export default fetchData
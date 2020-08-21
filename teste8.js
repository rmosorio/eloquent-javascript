function deepEqual (a, b){

    if (typeof a == "object" && a != null && typeof b == "object" && b != null)
        for (var x in a){
            
            if (!(x in b))
                return false;

            if (typeof a[x] == "object" && a[x] != null && typeof b[x] == "object" && b[x] != null)
                return deepEqual(a[x], b[x]);
            else if(a[x] !== b[x])
                return false            
        }
    else if (a !== b)
        return false;

    return true;
}


x = {nome: "Ricardo", id: 02, tel: 121212, ob:{a:1, b:{zzz:1}}};
y = {nome: "Ricardo", id: 02, tel: 121212, ob:{a:1, b:{zzz:1}}};

console.log(deepEqual(x, y));
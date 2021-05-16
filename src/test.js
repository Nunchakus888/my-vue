const data = [{
    id: '1',
    
    name: 'test1',
    
    children: [
    
    {
    
    id: '11',
    
    name: 'test11',
    
    children: [
    
    {
    
    id: '111',
    
    name: 'test111'
    
    },
    
    {
    
    id: '112',
    
    name: 'test112'
    
    }
    
    ]
    
    
    
    },
    
    {
    
    id: '12',
    
    name: 'test12',
    
    children: [
    
    {
    
    id: '121',
    
    name: 'test121'
    
    },
    
    {
    
    id: '122',
    
    name: 'test122'
    
    }
    
    ]
    
    }
    
    ]
    
    }];



function getPath(list, id) {
    const res = [];
    function dep(data, temp = []) {
        for(let i of data) {
            if (i.children) {
                dep(i.children, temp.concat(i.id));
            } else {
                if (i.id === id) {
                    res = temp;
                }
            }
        }
    }
    dep(list);
    return res;
}
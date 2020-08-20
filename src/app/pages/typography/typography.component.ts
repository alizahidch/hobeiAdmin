import { Component } from '@angular/core';
import {NumberAdminService} from '../../services/number-admin.service'


@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent{
    category;
    description;
    ncategory;
    editSelected;
    editName;
    selectedId;
    categories:any=[
   
    ]

    constructor(private api:NumberAdminService){
        this.editSelected=false;
    }

ngOnInit(){
    this.api.fetchCustomCategories().subscribe(res=>{
        this.categories=[];
        res.forEach(element => {
            const data = element.payload.doc.data() as {};
            const id = element.payload.doc.id as {};
            this.categories.push({...data,id})
          });
    })
    console.log(this.categories)

}


edit(x){
this.editName=x.category_name;
this.selectedId=x.id;
}



update()
{
    this.api.editCategory(this.selectedId,this.editName)
}

delete(x)
{
    this.api.deleteCategory(x.id);
}



    createCategory(){
        console.log(this.ncategory);
        let category={
            category_name:this.ncategory,
            creator:"admin"
        }

        this.api.createCategory(category).then(res=>{
            console.log(res)
        })


        // this.categories.push(this.ncategory)
    }

    
}

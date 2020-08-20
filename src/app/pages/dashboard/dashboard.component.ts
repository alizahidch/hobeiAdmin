import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ConditionalExpr, ThrowStmt } from '@angular/compiler';
import { NumberAdminService } from 'app/services/number-admin.service';
import {Observable} from 'rxjs';
declare var $: any;


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

number;
price;
operator;
serialNumber;
date;
editNumber;
editPrice;
editOperator;
editSerial;
editDate;
editCatrgory;
editObj={};
dataObj={};
resultNummbers:any=[];
counter;
sale;
profit;
categories=[];
check:any=[];
filteredArray=[];
checked;
selectedFilter;

checkCat=[
  "All auspicious numbers",

  
  "Administrative and accounting ",

   " VIP numbers, Good grades ",

    "Civil Servant, Employees ",

    "Celebrities and Media People ",

  "Legal Profession ",

 "Students and Intellectuals ",

 "Dragon Numbers ",

 "Engineer ",

 "Architect and Builders ",

 "IT and Technology ",

 "Swan Numbers ",

 "Charm Numbers ",

 "Property Traders or Developers ",

 "Elderly Health Numbers "
]


    ngOnInit(){







      this.chartColor = "#FFFFFF";

      this.canvas = document.getElementById("chartHours");
      this.ctx = this.canvas.getContext("2d");

      this.chartHours = new Chart(this.ctx, {
        type: 'line',

        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
          datasets: [{
              borderColor: "#6bd098",
              backgroundColor: "#6bd098",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
            },
            {
              borderColor: "#f17e5d",
              backgroundColor: "#f17e5d",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
            },
            {
              borderColor: "#fcc468",
              backgroundColor: "#fcc468",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5,
                //padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "#ccc",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent",
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }]
          },
        }
      });


      this.canvas = document.getElementById("chartEmail");
      this.ctx = this.canvas.getContext("2d");
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: [1, 2, 3],
          datasets: [{
            label: "Emails",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#e3e3e3',
              '#4acccd',
              '#fcc468',
              '#ef8157'
            ],
            borderWidth: 0,
            data: [342, 480, 530, 120]
          }]
        },

        options: {

          legend: {
            display: false
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });

      var speedCanvas = document.getElementById("speedChart");

      var dataFirst = {
        data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        fill: false,
        borderColor: '#fbc658',
        backgroundColor: 'transparent',
        pointBorderColor: '#fbc658',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var dataSecond = {
        data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
        fill: false,
        borderColor: '#51CACF',
        backgroundColor: 'transparent',
        pointBorderColor: '#51CACF',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      };

      var speedData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [dataFirst, dataSecond]
      };

      var chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: 'line',
        hover: false,
        data: speedData,
        options: chartOptions
      });
    }

    constructor(public api:NumberAdminService){
      this.api.fetchNumbers().subscribe(res=>{
this.resultNummbers=res;
this.filteredArray=res;
this.selectedFilter='simple'
      })



this.api.fetchOrders().subscribe(res=>{
this.counter=res.length
this.sale=this.counter*50;
this.profit=this.counter*10;})



    }



    clickCheck(cat){
this.checked=cat;   

    }





    eventCheck(x){
      console.log(x)
      if(x=="on"){
        this.check.push(this.checked)

      }
      else{
        let dummy=[];
        this,this.check.forEach(element => {
          if(element!==this.checked){
            dummy.push(element)
          }
        });
        this.check=dummy
            }

      console.log(this.check)

    }

    selectedOne(x){
      this.editNumber=x.number;
      this.editPrice=x.price;
      this.editOperator=x.operator;
      this.editSerial=x.serial;
      this.editDate=x.date;
      this.editCatrgory=x.categories;
    }



    openModal()
    {
      ($('#exampleModal') as any).modal('show');
    }



sold(x){
  this.selectedFilter=x;
if(x=='sold'){
  this.filteredArray=this.resultNummbers.filter(s => s.sold_status===true);
console.log(this.filteredArray)
}
else if(x=='listed')
{
  this.filteredArray=this.resultNummbers.filter(s => s.sold_status===false);

}
else if(x=='simple')
{
  this.filteredArray=this.resultNummbers;

}

}



createNumber(){
  let i=-1;
  this.categories.forEach(element => {
    i++
    this.categories[i]='`'+element+'`'
  });


this.dataObj={
serial:this.serialNumber,
number:this.number,
price:Number(this.price),
operator:this.operator,
date:this.date,
categories:this.check,
sold_status:false

}
console.log(this.dataObj)
this.api.createNummber(this.dataObj).then(()=>{
  console.log('Write succeeded!');
}
)

}

updateNumber(){
  let i=-1;
  this.editCatrgory.forEach(element => {
    i++
    this.editCatrgory[i]='`'+element+'`'
  });
  this.editObj={
  serial:this.editSerial,
  number:this.editNumber,
  price:Number(this.editPrice),
  operator:this.editOperator,
  date:this.editDate,
  categories:this.check,
  sold_status:false

  
  
  }
  this.api.createNummber(this.editObj).then(()=>{
    console.log('Update succeeded!');
  }
  )
  
  }



}

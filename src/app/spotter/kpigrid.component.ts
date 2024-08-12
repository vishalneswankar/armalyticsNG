import { Component } from '@angular/core';
import { MultiSelectTreeCheckableSettings } from "@progress/kendo-angular-dropdowns";
import { campaignData } from "./spottergridcampaign";

interface ColumnSetting  {
    field: string;
    title: string;
    format?: string;
    type: "text" | "numeric" | "boolean" | "date";
  }

@Component({
    selector: 'app-kpigrid',
    templateUrl: './kpigrid.component.html',
    styleUrl: './kpigrid.scss'
})

export class kpigridComponent {

  public checkableSettings: MultiSelectTreeCheckableSettings = {
    checkChildren: true,
    checkOnClick: false,
  };

  public productclient: any[] = [
    {
      text: "Furniture",
      id: 1,
      items: [
        { text: "Tables & Chairs", id: 2 },
        { text: "Sofas", id: 3 },
        { text: "Occasional Furniture", id: 4 },
      ],
    },
    {
      text: "Decor",
      id: 5,
      items: [
        { text: "Bed Linen", id: 6 },
        { text: "Carpets", id: 7 },
      ],
    },
  ];

  

  public ProductDropdown: Array<string> = ["Item 1", "Item 2", "Item 3"];

  //Date picker
  public dateValue: Date = new Date();

  //Toggle
  public drilldown = true;

 
  
  public gridData: unknown[] = campaignData;

  public columns: ColumnSetting[] = [
    {
      field: "ProductName",
      title: "Product Name",
      type: "text",
    },
    {
      field: "UnitPrice",
      format: "{0:c}",
      title: "Unit Price",
      type: "numeric",
    },
    {
      field: "FirstOrderedOn",
      format: "{0:d}",
      title: "First Ordered",
      type: "date",
    },
  ];

}
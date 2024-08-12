import { Component } from '@angular/core';
import { SeriesLabelsContentArgs } from "@progress/kendo-angular-charts";
import { MultiSelectTreeCheckableSettings } from "@progress/kendo-angular-dropdowns";
import { IntlService } from "@progress/kendo-angular-intl";
import { campaignData } from "./spottergridcampaign";

interface ColumnSetting  {
  field: string;
  title: string;
  format?: string;
  type: "text" | "numeric" | "boolean" | "date";
}

@Component({
  selector: 'app-spotter',
  templateUrl: './spotter.component.html',
  styleUrl: './spotter.component.scss'
})
export class SpotterComponent {
  public pieData = [
    { category: "0-14", value: 0.2545 },
    { category: "15-24", value: 0.1552 },
    { category: "25-54", value: 0.4059 },
    { category: "55-64", value: 0.0911 },
    { category: "65+", value: 0.0933 },
  ];

  constructor(private intl: IntlService) {
    this.labelContent = this.labelContent.bind(this);
  }

  public labelContent(args: SeriesLabelsContentArgs): string {
    return `${args.dataItem.category} years old: ${this.intl.formatNumber(
      args.dataItem.value,
      "p2"
    )}`;
  }

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

  //Sparkline data

  public spark1 = [736, 968, 305, 799, 998, 1014, 717, 1010, 210, 727];
  public spark2 = [236, 568, 705, 899, 198, 1014, 817, 410, 810, 327];
  public spark3 = [636, 168, 505, 299, 998, 414, 917, 1010, 910, 327];
  public spark4 = [936, 768, 405, 299, 498, 214, 917, 910, 210, 227];

  //Sparkline series color change
  public seriesDefaults: any = {
    type: 'bar', // Change to 'line' for line chart
    color: 'white', // Default color for the series
  };

    // Sparkline chart background transparent / Color Change
    public chartArea: any = {
      background: 'transparent'
    };
  public bulletData = [21, 23];
  public bulletValueAxis = {
    min: 0,
    max: 30,
    plotBands: [
      {
        from: 0,
        to: 15,
        color: "#787878",
        opacity: 0.15,
      },
      {
        from: 15,
        to: 22,
        color: "#787878",
        opacity: 0.3,
      },
      {
        from: 22,
        to: 30,
        color: "#787878",
        opacity: 0.15,
      },
    ],
  };


  //Spotter Dropdown

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

  //Toggle small tooltips popup
  kpiToogle:boolean = true
  kpiSpotterPopup:boolean = false
  onClick() {
    this.kpiToogle = !this.kpiToogle;
    this.kpiSpotterPopup = !this.kpiSpotterPopup
  }

  //popover
  public popOvercontent = "The Campaign Status chart shows the progress of each campaign in relation to the current date (growth of the inner circle) and the share of the selected KPI across all campaigns (size of each pie slice)";

  //array Object data loop

  campaignLists = [
    {
      campaignName : "Campaign Code",
      percentage: "99.8%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Campaign Name",
      percentage: "97.1%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Daily Totals",
      percentage: "99.8%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Campaign Code",
      percentage: "99.8%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Campaign Name",
      percentage: "97.1%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Daily Totals",
      percentage: "99.8%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Campaign Code",
      percentage: "99.8%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Campaign Name",
      percentage: "97.1%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Daily Totals",
      percentage: "99.8%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Campaign Code",
      percentage: "99.8%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Campaign Name",
      percentage: "97.1%",
      campaignValue : "DCR/01/054/001"
    },
    {
      campaignName : "Daily Totals",
      percentage: "99.8%",
      campaignValue : "DCR/01/054/001"
    }
  ]

  public costVaribaleChart: number[] = [5, 6, 5, 6,5, 6, 5, 6,5, 6, 5, 6];


}

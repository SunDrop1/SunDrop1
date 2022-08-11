import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from 'ag-grid-community';
import { AddClubComponent } from './admin/add-club/add-club.component';
import { AddCompetitionComponent } from './admin/add-competition/add-competition.component';
import { AddNageurComponent } from './admin/add-nageur/add-nageur.component';
import { ClubHistoryComponent } from './admin/club-history/club-history.component';
import { CompetitionHistoryComponent } from './admin/competition-history/competition-history.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DetailCompetitionComponent } from './admin/detail-competition/detail-competition.component';
import { EditAccountFormComponent } from './admin/edit-account-form/edit-account-form.component';
import { EditClubForm1Component } from './admin/edit-club-form1/edit-club-form1.component';
import { EditClubComponent } from './admin/edit-club/edit-club.component';
import { EditCompetitionFormComponent } from './admin/edit-competition-form/edit-competition-form.component';
import { EditCompetitionComponent } from './admin/edit-competition/edit-competition.component';
import { EditNageurFormComponent } from './admin/edit-nageur-form/edit-nageur-form.component';
import { EditNageurComponent } from './admin/edit-nageur/edit-nageur.component';
import { FilterNageursComponent } from './admin/filter-nageurs/filter-nageurs.component';
import { LookForAccountComponent } from './admin/look-for-account/look-for-account.component';
import { LookForClubComponent } from './admin/look-for-club/look-for-club.component';
import { NageurDetailFormComponent } from './admin/nageur-detail-form/nageur-detail-form.component';
import { NageurHistoryComponent } from './admin/nageur-history/nageur-history.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { RegisterComponent } from './admin/register/register.component';
import { TransfertComponent } from './admin/transfert/transfert.component';
import { ViewAccountComponent } from './admin/view-account/view-account.component';
import { ViewClubsComponent } from './admin/view-clubs/view-clubs.component';
import { ViewCompetitionComponent } from './admin/view-competition/view-competition.component';
import { ViewNageursComponent } from './admin/view-nageurs/view-nageurs.component';
import { ViewdetailformComponent } from './admin/viewdetailform/viewdetailform.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'admin',
    component:DashboardComponent,
    children: [
    
      {
         path:'register',
         component: RegisterComponent,
         
      },
      {
        path:'home',
        component: WelcomeComponent,
     },
     {
      path:'ViewAccount',
      component: ViewAccountComponent,
     },
     {
      path:'filterAccount',
      component: TestComponent,
     },
     {
      path:'editAccount',
      component: EditAccountComponent,
     },
     {
      path:'editAccountForm/:id',
      component: EditAccountFormComponent,
     },
     {
      path:'addClub',
      component: AddClubComponent,
     },
     {
      path:'viewClub',
      component: ViewClubsComponent,
     },
     {
      path:'filterClub',
      component:LookForClubComponent,
     },
     {
      path:'ClubDetails/:id',
      component:ViewdetailformComponent,
     },
     {
      path:'editClub',
      component:EditClubComponent,
     },
     {
      path:'editClubForm/:id',
      component:EditClubForm1Component,
     },
     {
      path:'addCompetitor',
      component: AddNageurComponent,
     },
     {
      path:'viewCompetitor',
      component: ViewNageursComponent,
     },
     {
      path:'filterCompetitor',
      component:FilterNageursComponent,
     },
     {
      path:'CompetitorDetails/:id',
      component:NageurDetailFormComponent,
     },
     {
      path:'editCompetitor',
      component:EditNageurComponent,
     },
     {
      path:'editCompetitorForm/:id',
      component:EditNageurFormComponent,
     },
     {
      path:'transfertForm/:id',
      component:TransfertComponent,
     },
     {
      path:'clubHistory',
      component:ClubHistoryComponent,
     },
     {
      path:'nageurHistory',
      component:NageurHistoryComponent,
     },
     {
      path:'addCompetition',
      component:AddCompetitionComponent,
    },
    {
      path:'viewCompetition',
      component:ViewCompetitionComponent
    },
    {
      path:'detailsCompetition/:id',
      component:DetailCompetitionComponent,
    },
    {
      path:'editCompetition',
      component:EditCompetitionComponent
    },
    {
      path:'editCompetitionForm/:id',
      component:EditCompetitionFormComponent
    },
    {
      path:'historyCompetition',
      component: CompetitionHistoryComponent
    }    
  ]
},
{
  path:'',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

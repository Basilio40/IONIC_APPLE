import { RouterModule, Routes } from '@angular/router';
import { SpeakerListPage } from './speaker-list';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SpeakerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakerListPageRoutingModule {}

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ChildSubsectionsList, HbModels} from '../../heroclixbible-app/models/hb.model';

@Injectable({
  providedIn: 'root'
})
export class TransmissionInformationService {

  bridgetForSubsectionPane = new Subject<boolean>();
  public stateSubsectionPaneObserver = this.bridgetForSubsectionPane.asObservable();

  triggerToIndicesSubsectionAnimation = new Subject<boolean>();
  public stateIndicesPaneObserver = this.triggerToIndicesSubsectionAnimation.asObservable();

  triggerToDescriptionPaneAnimation = new Subject<boolean>();
  public stateDescriptionPaneObserver = this.triggerToDescriptionPaneAnimation.asObservable();

  transmitterInfoHeroclixModel = new Subject<any>();
  public holdInfoHeroclixModel = this.transmitterInfoHeroclixModel.asObservable();

  transmitterInfoHeroclixModel2 = new Subject<any>();
  public holdInfoHeroclixModel2 = this.transmitterInfoHeroclixModel2.asObservable();

  constructor() {
  }

  public changeStateForSubsectionPane(value?: boolean): void {
    this.bridgetForSubsectionPane.next(value);
  }

  public changeStateForDescriptionPane(value?: boolean): void {
    this.triggerToDescriptionPaneAnimation.next(value);
  }

  public changeStateForIndicesPane(value?: boolean): void {
    this.triggerToIndicesSubsectionAnimation.next(value);
  }

  public senderSubsectionsList(subsectionsList: any): void {
    this.transmitterInfoHeroclixModel.next(subsectionsList);
  }

  public senderIndicesList(subsectionsList: any): void {
    this.transmitterInfoHeroclixModel2.next(subsectionsList);
  }
}

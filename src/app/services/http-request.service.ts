import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HbModels} from '../heroclixbible-app/models/hb.model';
import {environment} from '../../environments/environment';
import {VersionsModel} from '../models/versions.model';
import {VersionsListModel} from '../models/versions-list.model';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {
  private URL_ENDPOINT = environment.apiURL + 'v1/sections/';
  private URL_ENDPOINT_VERSIONS = environment.apiURL + 'v1/versions/';

  constructor(private httpClient: HttpClient) {
  }

  public getSections(lang: string): Observable<HbModels[]> {
    const httpHeaders = new HttpHeaders({
      'Accept-Language': lang
    });
    return this.httpClient.get<HbModels[]>(this.URL_ENDPOINT, {headers: httpHeaders});
  }

  public getVersions(): Observable<VersionsModel[]> {
    return this.httpClient.get<VersionsModel[]>(this.URL_ENDPOINT_VERSIONS);
  }

  public getSectionsWithVersion(version: VersionsListModel, lang: string): Observable<HbModels[]> {
    const httpHeaders = new HttpHeaders({
      'Accept-Language': lang
    });
    return this.httpClient.post<HbModels[]>(this.URL_ENDPOINT, version, {headers: httpHeaders});
  }


}

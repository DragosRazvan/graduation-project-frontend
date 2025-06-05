import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentProjectRequestFormComponent } from './components/student-project-request-form/student-project-request-form.component';
import { StudentProjectRequestViewComponent } from './components/student-project-request-view/student-project-request-view.component';
import { ProfessorAddNewProjectIdeaFormComponent } from './components/professor-add-new-project-idea-form/professor-add-new-project-idea-form.component';
import { ProfessorViewProjectRequestsComponent} from './components/professor-view-project-requests/professor-view-project-requests.component';
import { ProfessorViewOwnProjectIdeasComponent } from './components/professor-view-own-project-ideas/professor-view-own-project-ideas.component';
import { ProfessorUpdateProjectRequestComponent } from './components/professor-update-project-request/professor-update-project-request.component';
import { SecretaryMainPageComponent } from './components/secretary-main-page/secretary-main-page.component';
import { SecretaryViewDepartmentsComponent } from './components/secretary-view-departments/secretary-view-departments.component';
import { SecretaryViewSpecializationsComponent } from './components/secretary-view-specializations/secretary-view-specializations.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginFormComponent
    },
    {
        path: "StudentRequestProjectForm",
        component: StudentProjectRequestFormComponent
    },{
        path: "StudentRequestProjectView",
        component: StudentProjectRequestViewComponent
    },
    {
        path: "ProfessorAddNewProjectIdea",
        component: ProfessorAddNewProjectIdeaFormComponent
    },
    {
        path: "ProfessorViewProjectRequests",
        component: ProfessorViewProjectRequestsComponent
    },
    {
        path: "ProfessorViewOwnProjectIdeas",
        component: ProfessorViewOwnProjectIdeasComponent
    },
    {
        path: "ProfessorUpdateProjectRequest/:projectRequestId",
        component: ProfessorUpdateProjectRequestComponent
    },
    {
        path: "SecretaryMainPage",
        component: SecretaryMainPageComponent
    },
    {
        path: "SecretaryViewDepartments",
        component: SecretaryViewDepartmentsComponent
    },
    {
        path: "SecretaryViewSpecializations",
        component: SecretaryViewSpecializationsComponent
    }
];

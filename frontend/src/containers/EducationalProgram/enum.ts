export enum fields {
    EDUCATION_PROGRAM_CHARACTERISTIC = 'EDUCATION_PROGRAM_CHARACTERISTIC',
    COMPETENCE_MATRIX = 'COMPETENCE_MATRIX',
    EDUCATION_PROGRAM_LIST = 'EDUCATION_PROGRAM_LIST',
    EDUCATION_PROGRAM_DIALOG = 'EDUCATION_PROGRAM_DIALOG',
    IS_OPEN_DIALOG = 'IS_OPEN_DIALOG',
    DIALOG_DATA = 'DIALOG_DATA',
    SEARCH_QUERY = 'SEARCH_QUERY',
    CURRENT_PAGE = 'CURRENT_PAGE',
    ALL_COUNT = 'ALL_COUNT',
    SORTING = 'SORTING',
    SORTING_FIELD = 'SORTING_FIELD',
    SORTING_MODE = 'SORTING_MODE',
    KINDS_OF_ACTIVITIES = 'KINDS_OF_ACTIVITIES',
    OBJECTS_OF_ACTIVITIES = 'OBJECTS_OF_ACTIVITIES',
}

export enum fetchingTypes {
    GET_EDUCATION_PROGRAM_LIST = 'GET_EDUCATION_PROGRAM_LIST',
    DELETE_EDUCATION_PROGRAM = 'DELETE_EDUCATION_PROGRAM',
    UPDATE_EDUCATION_PROGRAM = 'UPDATE_EDUCATION_PROGRAM',
    CREATE_EDUCATION_PROGRAM = 'CREATE_EDUCATION_PROGRAM',
    GET_COMPETENCE_MATRIX = 'GET_COMPETENCE_MATRIX',
    CHARACTERISTIC_CREATE_COMPETENCE_GROUP = 'CHARACTERISTIC_CREATE_COMPETENCE_GROUP',
    CHARACTERISTIC_DELETE_COMPETENCE_GROUP = 'CHARACTERISTIC_DELETE_COMPETENCE_GROUP',
    CHARACTERISTIC_SAVE_COMPETENCE = 'CHARACTERISTIC_SAVE_COMPETENCE',
    CHARACTERISTIC_DELETE_COMPETENCE = 'CHARACTERISTIC_DELETE_COMPETENCE',
    CHARACTERISTIC_SAVE_INDICATOR = 'CHARACTERISTIC_SAVE_INDICATOR',
    CHARACTERISTIC_DELETE_INDICATOR = 'CHARACTERISTIC_DELETE_INDICATOR',
    CHARACTERISTIC_SAVE_GROUP_TITLE = 'CHARACTERISTIC_SAVE_GROUP_TITLE',
    CHARACTERISTIC_SAVE_COMPETENCE_LABOR_FUNCTION = 'CHARACTERISTIC_SAVE_COMPETENCE_LABOR_FUNCTION',
    CHARACTERISTIC_SAVE_COMPETENCE_KIND_OF_ACTIVITY = 'CHARACTERISTIC_SAVE_COMPETENCE_KIND_OF_ACTIVITY',
    CHARACTERISTIC_SAVE_PROFESSIONAL_STANDARD = 'CHARACTERISTIC_SAVE_PROFESSIONAL_STANDARD',
    CHARACTERISTIC_SAVE_PROFESSIONAL_STANDARD_LABOR_FUNCTION = 'CHARACTERISTIC_SAVE_PROFESSIONAL_STANDARD_LABOR_FUNCTION',
    CHARACTERISTIC_SAVE_KIND_OF_ACTIVITY = 'CHARACTERISTIC_SAVE_KIND_OF_ACTIVITY',
    CHARACTERISTIC_DELETE_PROFESSIONAL_STANDARD = 'CHARACTERISTIC_DELETE_PROFESSIONAL_STANDARD',
    CHARACTERISTIC_DELETE_PROFESSIONAL_STANDARD_LABOR_FUNCTION = 'CHARACTERISTIC_DELETE_PROFESSIONAL_STANDARD_LABOR_FUNCTION',
    CHARACTERISTIC_DELETE_KIND_OF_ACTIVITY = 'CHARACTERISTIC_DELETE_KIND_OF_ACTIVITY',
    CREATE_KIND_OF_ACTIVITY = 'CREATE_KIND_OF_ACTIVITY',
    CREATE_OBJECT_OF_ACTIVITY = 'CREATE_OBJECT_OF_ACTIVITY',
    GET_KIND_OF_ACTIVITY = 'GET_KIND_OF_ACTIVITY',
    GET_OBJECTS_OF_ACTIVITY = 'GET_OBJECTS_OF_ACTIVITY',
    SAVE_ZUN = 'SAVE_ZUN',
}

export enum EducationProgramCharacteristicFields {
    ID = 'id',
    DIRECTION = 'area_of_activity',
    DEAN = 'dean_of_the_faculty',
    DEVELOPERS = 'developers',
    DIRECTOR_MEGAFALCULTY = 'director_of_megafaculty',
    EMPLOYERS = 'employers_representatives',
    KC_COMPETENCES = 'kc_competences',
    NP_COMPETENCES = 'np_competences',
    PK_COMPETENCES = 'pk_competences',
    OK_COMPETENCES = 'ok_competences',

    GENERAL_PROFESSIONAL_COMPETENCES = 'group_of_general_prof_competences',
    SUPRA_PROFESSIONAL_COMPETENCES = 'group_of_over_prof_competences',
    KEY_COMPETENCES = 'group_of_key_competences',
    PROFESSIONAL_COMPETENCES = 'group_of_pk_competences',

    SCIENTIFIC_SUPERVISOR = 'scientific_supervisor_of_the_educational_program',
    EDUCATION_PROGRAM = 'educational_program',
    KINDS_OF_ACTIVITIES = 'kinds_of_activity',
    OBJECTS_OF_ACTIVITY = 'objects_of_activity',
    TASKS_OF_ACTIVITY = 'tasks_of_activity',
    AREA_OF_ACTIVITY = 'area_of_activity',
    PPS = 'pps',
    ANNOTATION = 'annotation',
}

export enum EducationProgramFields {
    ID = 'id',
    ACADEMIC_PLAN_FOR_EP = 'academic_plan_for_ep',
    ACADEMIC_PLAN = 'academic_plan',
    FIELD_OF_STUDY = 'field_of_study',
    YEAR = 'year_of_recruitment',
    QUALIFICATION = 'qualification',
    MANAGER = 'manager',
    CAN_EDIT = 'can_edit',
    DIRECTOR = 'directors_position',
    EP_SUPERVISOR = 'ep_supervisor',
    EDUCATIONAL_PROGRAM = 'educational_program',
}

export enum CompetenceTableType {
    KEY_COMPETENCES = 'KEY_COMPETENCES',
    SUPRA_PROFESSIONAL_COMPETENCES = 'SUPRA_PROFESSIONAL_COMPETENCES',
    GENERAL_PROFESSIONAL_COMPETENCES = 'GENERAL_PROFESSIONAL_COMPETENCES',
    PROFESSIONAL_COMPETENCES = 'PROFESSIONAL_COMPETENCES',
}

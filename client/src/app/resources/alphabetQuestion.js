import when from 'when';
import { get } from 'utils/http';

import baseUrl from 'utils/baseUrl';


export function getAlphabetQuestionsFromJSON() {
    return when(
        get( `assets/alphabetQuestions.json` )
    );
}

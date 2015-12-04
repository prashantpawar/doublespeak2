import when from 'when';
import { get } from 'utils/http';

export function getAlphabets() {
    return when(
        $.get('assets/alphabets.json')
    );
}

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export function formatDateShort(date) {
    const formatedDate = new Intl.DateTimeFormat(
        'pt-BR', {
            day: '2-digit',
            month: '2-digit',
    }).format(new Date(date));

    return formatedDate;
}
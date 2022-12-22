import { useRouter } from "next/router";
import en from "../../i18n/en";
import uk from "../../i18n/uk";


export const useLocale = () => {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'uk' ? uk : en

	const handleLocaleChange = (event: any) => {
		const value = event.target.value;

		router.push(router.route, router.asPath, {
			locale: value,
		});
	};
	return {
		t,
		handleLocaleChange,
		router,
		locale
	}
}
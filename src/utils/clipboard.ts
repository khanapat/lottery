export const copyText = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error: any) {
        console.log((error as Error).message);
    }
};
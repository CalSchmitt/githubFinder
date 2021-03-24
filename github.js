class GitHub{
    constructor(){
        this.client_id = 'b80f0b712b511432a32a';
        this.client_secret = ' 31ac0a576ac66e066e2e6c2b57bf1c15e9add62e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort-${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }

    }
}
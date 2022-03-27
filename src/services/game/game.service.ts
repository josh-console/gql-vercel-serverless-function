type Account = {
    id: string;
};

interface IGameService<T> {
    /**
     * TODO: replay
     */
    history: T[];
    /**
     * TODO: spectators, invitees, players
     */
    participants: Account[];
}

export class GameService<T> implements IGameService<T> {
    private _history: T[] = [];
    private _participants: Account[] = [];

    public history: T[] = this._history;
    public participants: Account[] = this._participants;
}

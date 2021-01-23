using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Brixel.Findr.API.Infrastructure.Notifications
{
    using Microsoft.AspNetCore.SignalR;
    using Microsoft.Extensions.Logging;

    public class GameHub : Hub<IGameClient>
    {
        private readonly ILogger<GameHub> _logger;

        public GameHub(ILogger<GameHub> logger)
        {
            _logger = logger;
        }
    }

    public interface IGameClient
    {
        Task PlayerMoved(Guid playerId);
    }
}

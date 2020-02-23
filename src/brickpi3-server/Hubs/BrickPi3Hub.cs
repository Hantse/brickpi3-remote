using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace brickpi3_server.Hubs
{
    public class BrickPi3Hub : Hub
    {
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Desktop_TCC
{
    public partial class tela_splash_feedback : Form
    {
        public tela_splash_feedback()
        {
            InitializeComponent();
        }

        private void tela_splash_feedback_Load(object sender, EventArgs e)
        {
            
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            progressBar1.Increment(1);
            if (progressBar1.Value == 100)
            {
                timer1.Stop();
                tela_feedback f = new tela_feedback();
                f.Show();
                this.Hide();
            }
        }
    }
}
